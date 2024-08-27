using api.Data;
using api.DTOs.CategoryDTOs;
using api.Mapper.CategoryMap;
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


        public async Task<List<CategoryDto>?> GetAllCategoriesWithProducts()
        {
            var products = await _context.Products.ToListAsync();
            var ingredients = await _context.Ingredients.ToListAsync();
            var productItems = await _context.ProductItems.Include(x=>x.Product).ToListAsync();
            var categories = await _context.Categories.Include(x=>x.Products).ToListAsync();  
            return categories.ToCategoryDto(products, ingredients, productItems);  
        }

    }
}