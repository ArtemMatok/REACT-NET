using api.Data;
using api.DTOs.ProductDTOs;
using api.Mapper.ProductMap;
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

        public async Task<List<Product>?> GetAllProducts()
        {
            return await _context.Products.Include(x=>x.Ingredients).ToListAsync();
        }

        public async Task<Product?> GetProductById(int productId)
        {
            return await _context.Products
                .Where(x => x.ProductId == productId)
                .Include(x => x.Ingredients)
                .Include(x => x.ProductItems)
                .FirstOrDefaultAsync();
        }

        public async Task<List<ProductSearchDto>?> GetProductsByName(string query)
        {
            var products = await _context.Products
                .Where(x=>x.Name.ToLower().Contains(query.ToLower()))
                .ToListAsync();

            if(products is null || products.Count() == 0)
            {
                return null;
            }

            return products.ToProductSearchDto();
        }
    }
}
