using api.Data;
using api.DTOs.RequestDTOs;
using api.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace api.Repositories.CategoryRepo
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ApplicationDbContext _context;

        public CategoryRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Category>?> GetAllCategoriesWithFullProduct(GetProductSearchParams searchParams)
        {
            var query = _context.Categories
                .Include(x => x.Products)
                    .ThenInclude(x => x.Ingredients)
                .Include(x => x.Products)
                    .ThenInclude(x => x.ProductItems)
                .AsQueryable();

             if (searchParams.IngredientsId != null)
             {
                 query = query.Where(x => x.Products
                     .Any(p => p.Ingredients.Any(i => searchParams.IngredientsId.Contains(i.IngredientId))))
                     .AsQueryable();
             }

            return await query
                .ToListAsync();
        }
    }
}
