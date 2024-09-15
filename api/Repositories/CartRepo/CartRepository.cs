using api.Data;
using api.Models;
using Microsoft.AspNetCore.Http.HttpResults;
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

        public async Task<Cart?> CreateCartWithToken(string token)
        {
            var cart = new Cart()
            {
                Token = token   
            };

            await _context.AddAsync(cart);
            
            if(await _context.SaveChangesAsync() == 1)
            {
                return cart;
            }
            else
            {
                return null; 
            }
        }

        public async Task<Cart?> GetCartById(int id)
        {
            var cart = await _context.Carts
                .Include(x => x.CartItems)
                        .ThenInclude(c => c.ProductItem)
                            .ThenInclude(p => p.Product)
                    .Include(x => x.CartItems)
                        .ThenInclude(c => c.Ingredients)
                .FirstOrDefaultAsync(x=>x.CartId == id);

            if(cart is null)
            {
                return null;
            }
            return cart;
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

        public async Task<bool> UpdateCartByAddingCartItem(int cartId, CartItem cartItem)
        {
            var cart = await GetCartById(cartId);
            if(cart is null)
            {
                return false;
            }

            cart.CartItems.Add(cartItem);

            var result = _context.Carts.Update(cart);
            if(result is null)
            {
                return false;
            }
            await _context.SaveChangesAsync();

            return true;
           
        }

        public async Task<Cart?> UpdateCartTotalAmount(string token)
        {
            var userCart = await _context.Carts.Where(x => x.Token == token)
                .Include(x => x.CartItems)
                    .ThenInclude(c => c.ProductItem)
                        .ThenInclude(p => p.Product)
                .Include(x => x.CartItems)
                    .ThenInclude(c => c.Ingredients)
                .FirstOrDefaultAsync();
            if (userCart == null)
            {
                return null;
            }


            var totalAmount = userCart.CartItems.Sum(cartItem =>
            {
                double ingredientsPrice = cartItem.Ingredients?.Sum(x => x.Price) ?? 0;

                return (ingredientsPrice + cartItem.ProductItem.Price) * cartItem.Quantity;
            });

            userCart.TotalAmount = totalAmount;
            _context.Carts.Update(userCart);

            await _context.SaveChangesAsync();

            return userCart;

        }       
    }
}
