using api.Models;

namespace api.Repositories.CartRepo
{
    public interface ICartRepository
    {
        Task<Cart> GetCartByUserIdOrByToken(string? userId, string? token);

    }
}
