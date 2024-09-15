using api.DTOs.CartItemDTOs;
using api.DTOs.ProductDTOs;
using api.DTOs.ProductItemsDTOs;
using api.Helpers.Token;
using api.Mapper.CartItemMap;
using api.Mapper.CartMap;
using api.Mapper.IngredientMap;
using api.Models;
using api.Repositories.CartItemRepo;
using api.Repositories.CartRepo;
using api.Repositories.IngredientsRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartRepository _cartRepository;
        private readonly ICartItemRepository _cartItemRepository;
        private readonly IIngredientRepository _ingredientRepository;

        public CartController(ICartRepository cartRepository, ICartItemRepository cartItemRepository, IIngredientRepository ingredientRepository)
        {
            _cartRepository = cartRepository;
            _cartItemRepository = cartItemRepository;
            _ingredientRepository = ingredientRepository;
        }

        [HttpGet("GetCartByUserIdOrToken")]
        public async Task<IActionResult> GetCartByUserIdOrToken([FromQuery] string? userId, [FromQuery] string? token)
        {
            if (userId is null && token is null)
            {
                return Ok(new Cart());
            }
            var cart = await _cartRepository.GetCartByUserIdOrByToken(userId, token);
            if (cart is null)
            {
                return NotFound();
            }

            return Ok(cart.ToCartDto());
        }

        [HttpPut("UpdateCartByItemQuantity/{token}/{cartItemId}/{quantity}")]
        public async Task<IActionResult> UpdateCartItemQuantity(string token, int cartItemId, int quantity)
        {
            var isExistsCartItem = _cartItemRepository.IsExsistCartItem(cartItemId);
            if (!isExistsCartItem)
            {
                return NotFound("Cart Item wasn`t found");
            }

            var cartItem = await _cartItemRepository.GetCartItemById(cartItemId);
            if (cartItem == null)
            {
                return BadRequest("Something went wrong during getting cartItem");
            }

            var updateCartItem = await _cartItemRepository.UpdateCartItemQuantity(quantity, cartItem);

            if (updateCartItem == null)
            {
                return BadRequest("Something went wrong during updating");
            }
            var cart = await _cartRepository.UpdateCartTotalAmount(token);
            if (cart is null)
            {
                return BadRequest("Something went during updating cart");
            }

            return Ok(cart.ToCartDto());

        }

        [HttpDelete("UpdateCartByDeletingCartItem/{token}/{cartItemId}")]
        public async Task<IActionResult> UpdateCartByDeletingCartItem(string token, int cartItemId)
        {
            var isExistsCartItem = _cartItemRepository.IsExsistCartItem(cartItemId);
            if (!isExistsCartItem)
            {
                return NotFound("Cart Item wasn`t found");
            }

            var cartItem = await _cartItemRepository.GetCartItemById(cartItemId);
            if (cartItem == null)
            {
                return BadRequest("Something went wrong during getting cartItem");
            }

            var deleteCartItem = await _cartItemRepository.DeleteCartItem(cartItem);
            if(!deleteCartItem)
            {
                return BadRequest("Something went wrong during deleting");
            }

            var cart = await _cartRepository.UpdateCartTotalAmount(token);
            if (cart is null)
            {
                return BadRequest("Something went during updating cart");
            }

            return Ok(cart.ToCartDto());
        }

        [HttpPost("CreateCartWithToken")]
        public async Task<IActionResult> CreateCartWithToken()
        {
            var cartToken = CartToken.GenerateToken();
            if(cartToken is null)
            {
                return BadRequest("Something went wrong during creating cart token");
            }

            var cart = await _cartRepository.CreateCartWithToken(cartToken);

            if(cart is null)
            {
                return BadRequest("Something went wrong during creating cart with token");
            }

            return Ok(cart.ToCartDto());
        }

        //[HttpPut("UpdateCartByAdding/{cartId}")]
        //public async Task<IActionResult> UpdateCartByAdding(int cartId, ProductDto product)
        //{
        //    var userCart = await _cartRepository.GetCartById(cartId);
        //    if (userCart is null)
        //    {
        //        return BadRequest("Cart wasn`t found");
        //    }

        //    var findCartItem = await _cartItemRepository.GetCartItemByProduct(cartId, product);
        //    //If cartItem was in userCart, we will do quantity +1 
        //    if(findCartItem != null)
        //    {
        //        var updateCartItem = await _cartItemRepository.UpdateCartItemByQuantityPlusOne(findCartItem);

        //        if (updateCartItem == null)
        //        {
        //            return BadRequest("Something went wrong during updating");
        //        }
        //        var cart = await _cartRepository.UpdateCartTotalAmount(userCart.Token);
        //        if (cart is null)
        //        {
        //            return BadRequest("Something went during updating cart");
        //        }

        //        return Ok(cart);
        //    }
        //    else
        //    {
        //        var newCartItem = new CartItem()
        //        {
        //            CartId = cartId,
        //            ProductItemId = product.ProductId,
        //            Quantity = 1,
        //            Ingredients = product.Ingredients.ToIngreditent()
        //        };

        //        var addCartItem = await _cartItemRepository.CreateCartItem(newCartItem);

        //        if(addCartItem)
        //        {
        //            var cart = await _cartRepository.UpdateCartTotalAmount(userCart.Token);
        //            if (cart is null)
        //            {
        //                return BadRequest("Something went during updating cart");
        //            }

        //            return Ok(cart);
        //        }
        //        else
        //        {
        //            return BadRequest("Something went wrong during adding cartItem");  
        //        }

        //    }
        //}

        [HttpPut("UpdateCartByAdding/{cartId}")]
        public async Task<IActionResult> UpdateCartByAdding(int cartId, ProductItemWithIngredientsDto productItemWithIngredient)
        {
            var userCart = await _cartRepository.GetCartById(cartId);
            if (userCart is null)
            {
                return BadRequest("Cart wasn`t found");
            }

            var findCartItem = await _cartItemRepository.GetCartItemByProduct(cartId,productItemWithIngredient);
            if(findCartItem != null)
            {
                var updateCartItem = await _cartItemRepository.UpdateCartItemByQuantityPlusOne(findCartItem);
                if (updateCartItem == null)
                {
                    return BadRequest("Something went wrong during updating");
                }
                var cart = await _cartRepository.UpdateCartTotalAmount(userCart.Token);
                if (cart is null)
                {
                    return BadRequest("Something went during updating cart");
                }

                return Ok(cart.ToCartDto());
            }
            else
            {
                var newCartItem = new CartItem()
                {
                    CartId = cartId,
                    Quantity = 1,
                    ProductItemId = productItemWithIngredient.ProductItemId,
                    Ingredients = await _ingredientRepository.GetIngredientsBySelectedId(productItemWithIngredient.IngredientsId)
                };

                var addCartItem = await _cartRepository.UpdateCartByAddingCartItem(cartId, newCartItem);

                if (addCartItem)
                {
                    var cart = await _cartRepository.UpdateCartTotalAmount(userCart.Token);
                    if (cart is null)
                    {
                        return BadRequest("Something went during updating cart");
                    }

                    return Ok(cart.ToCartDto());
                }
                else
                {
                    return BadRequest("Something went wrong during adding cartItem");
                }
            }

        }
    }
}
