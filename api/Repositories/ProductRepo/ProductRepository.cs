using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.ProductRepo
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext _context;

        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Product>> GetProductsByName(string query)
        {
            return await _context.Products
                .Where(x => x.Name.ToLower().Contains(query.ToLower()))
                .ToListAsync();
        }
    }
}
