using api.Models;

namespace api.Repositories.CartItemRepo
{
    public interface ICartItemRepository
    {
        bool IsExsistCartItem(int cartItemId);
        Task<CartItem?> GetCartItemById(int cartItemId);
        Task<CartItem> UpdateCartItemQuantity(int quantity, CartItem cartItem);
        Task<bool> DeleteCartItem(CartItem cartItem);
    }
}
