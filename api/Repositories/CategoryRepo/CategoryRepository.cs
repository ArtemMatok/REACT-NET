using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.CategoryRepo
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ApplicationDbContext _context;

        public CategoryRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Category>?> GetAllCategoriesWithFullProduct()
        {
            return await _context.Categories
            .Include(x => x.Products)
                .ThenInclude(x => x.Ingredients) // Включаємо Ingredients
            .Include(x => x.Products)
                .ThenInclude(x => x.ProductItems) // Включаємо ProductItems
            .ToListAsync();
        }
    }
}
