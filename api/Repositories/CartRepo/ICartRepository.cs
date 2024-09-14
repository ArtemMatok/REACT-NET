using api.Models;

namespace api.Repositories.CartRepo
{
    public interface ICartRepository
    {
        Task<Cart> GetCartByUserIdOrByToken(string? userId, string? token);
        Task<Cart?> UpdateCartTotalAmount(string token);
        Task<Cart?> CreateCartWithToken(string token);
        Task<Cart?> GetCartById(int id);
        Task<bool> UpdateCartByAddingCartItem(int cartId, CartItem cartItem);
    }
}
