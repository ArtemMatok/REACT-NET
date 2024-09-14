using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.ProductItemRepo
{
    public class ProductItemRepository : IProductItemRepository
    {
        private readonly ApplicationDbContext _context;

        public ProductItemRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ProductItem?> GetProductItemByParameters(int productId, int size, int pizzaType)
        {
            var productItem = await _context.ProductItems
                .Where(x => x.ProductId == productId && x.Size == size && x.PizzaType == pizzaType)
                .Include(x=>x.Product)
                .FirstOrDefaultAsync();

            if(productItem is null)
            {
                return null;
            }

            return productItem;
        }
    }
}
