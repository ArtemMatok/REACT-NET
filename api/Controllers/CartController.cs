using api.Mapper.CartMap;
using api.Models;
using api.Repositories.CartItemRepo;
using api.Repositories.CartRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartRepository _cartRepository;
        private readonly ICartItemRepository _cartItemRepository;

        public CartController(ICartRepository cartRepository, ICartItemRepository cartItemRepository)
        {
            _cartRepository = cartRepository;
            _cartItemRepository = cartItemRepository;
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
    }
}
