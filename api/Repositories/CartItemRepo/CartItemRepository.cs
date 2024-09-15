using api.Data;
using api.DTOs.ProductDTOs;
using api.DTOs.ProductItemsDTOs;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.CartItemRepo
{
    public class CartItemRepository : ICartItemRepository
    {
        private readonly ApplicationDbContext _context;

        public CartItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> DeleteCartItem(CartItem cartItem)
        {
            try
            {
                _context.CartItems.Remove(cartItem);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (System.Exception Exception)
            {
                return false;
            }
        }

        public async Task<CartItem?> GetCartItemById(int cartItemId)
        {
            var cartItem = await _context.CartItems
                .Include(x => x.ProductItem)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(x => x.CartItemId == cartItemId);
            return cartItem;

        }

        public async Task<CartItem?> GetCartItemByProduct(int cartId, ProductItemWithIngredientsDto productItemWithIngredients)
        {
            var cartItems = await _context.CartItems
                .Where(x => x.CartId == cartId &&
                    x.ProductItem.ProductItemId == productItemWithIngredients.ProductItemId)
                .ToListAsync();

            if(productItemWithIngredients.IngredientsId.Count != 0)
            {
                var cartItem = cartItems
                    .FirstOrDefault(x => x.Ingredients != null &&
                        x.Ingredients.Count == productItemWithIngredients.IngredientsId.Count &&
                        x.Ingredients.All(i => productItemWithIngredients.IngredientsId
                            .Any(p => p == i.IngredientId)));
                if (cartItem is null)
                {
                    return null;
                }
                return cartItem;
            }
            else
            {
                var cartItem = cartItems
                     .FirstOrDefault(x => x.Ingredients.Count == productItemWithIngredients.IngredientsId.Count);
                if (cartItem is null)
                {
                    return null;
                }
                return cartItem;
            }
            


          
        }

        public bool IsExsistCartItem(int cartItemId)
        {
            return _context.CartItems.Any(x => x.CartItemId == cartItemId);
        }

        public async Task<CartItem> UpdateCartItemQuantity(int quantity, CartItem cartItem)
        {
            cartItem.Quantity = quantity;
            _context.CartItems.Update(cartItem);
            await _context.SaveChangesAsync();
            return cartItem;
        }

        public async Task<CartItem> UpdateCartItemByQuantityPlusOne(CartItem cartItem)
        {
            cartItem.Quantity = cartItem.Quantity + 1;
            _context.CartItems.Update(cartItem);
            await _context.SaveChangesAsync();
            return cartItem;
        }

       
    }
}
