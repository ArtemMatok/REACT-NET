using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.CartRepo
{
    public class CartRepository : ICartRepository
    {
        private readonly ApplicationDbContext _context;

        public CartRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Cart> GetCartByUserIdOrByToken(string? userId, string? token)
        {
            if (userId == null)
            {
                var userCart = await _context.Carts.Where(x => x.Token == token)
                    .Include(x => x.CartItems)
                        .ThenInclude(c => c.ProductItem)
                            .ThenInclude(p => p.Product)
                    .Include(x => x.CartItems)
                        .ThenInclude(c => c.Ingredients) 
                    .FirstOrDefaultAsync();
                if (userCart != null)
                {
                    userCart.CartItems = userCart.CartItems.OrderByDescending(y => y.CartItemId).ToList();
                }

                return userCart;
            }
            else
            {
                var userCart = await _context.Carts.Where(x => x.AppUserId == userId)
                     .Include(x => x.CartItems)
                        .ThenInclude(c => c.ProductItem)
                            .ThenInclude(p => p.Product)
                    .Include(x => x.CartItems)
                        .ThenInclude(c => c.Ingredients) 
                    .FirstOrDefaultAsync();

                if (userCart != null)
                {
                    userCart.CartItems = userCart.CartItems.OrderByDescending(y => y.CartItemId).ToList();
                }

                return userCart;
            }
        }
    }
}
