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

        public List<Category> GetAllCategoriesWithFullProductByIngredients(GetProductSearchParams searchParams)
        {
            var query =  _context.Categories
                .Include(x => x.Products)
                    .ThenInclude(x => x.Ingredients)
                .Include(x => x.Products)
                    .ThenInclude(x => x.ProductItems).AsQueryable();

            if (searchParams.IngredientsId != null)
            {

                query = query.Select(c => new Category
                {
                    CategoryId = c.CategoryId,
                    Name = c.Name,
                    Products = c.Products.Where(p => p.Ingredients.Any(i => searchParams.IngredientsId.Contains(i.IngredientId))).ToList()
                }).Where(c => c.Products.Any());
            }

            if(searchParams.PizzaTypes != null)
            {
                query = query.Select(c => new Category
                {
                    CategoryId = c.CategoryId,
                    Name = c.Name,
                    Products = c.Products.Where(p => p.ProductItems.Any(pi =>pi.PizzaType.HasValue && searchParams.PizzaTypes.Contains(pi.PizzaType.Value))).ToList()
                }).Where(c=>c.Products.Any());
            }

            if (searchParams.Sizes != null && searchParams.Sizes.Any())
            {
                query = query.Select(c => new Category
                {
                    CategoryId = c.CategoryId,
                    Name = c.Name,
                    Products = c.Products
                        .Where(p => p.ProductItems
                            .Any(pi => pi.Size.HasValue && searchParams.Sizes.Contains(pi.Size.Value)))
                        .ToList()  // Якщо потрібне негайне матеріалізування результату
                })
                .Where(c => c.Products.Any());  // Фільтруємо категорії, які мають продукти
            }

                query = query.Select(c => new Category
                {
                    CategoryId = c.CategoryId,
                    Name = c.Name,
                    Products = c.Products
                        .Where(p => p.ProductItems
                            .Any(pi =>pi.Price >= searchParams.PriceFrom && pi.Price<=searchParams.PriceTo))
                        .ToList()  // Якщо потрібне негайне матеріалізування результату
                }).Where(c=>c.Products.Any());


            return query.ToList();
        }

        public async Task<List<Category>> GetAllCategoriesWithProducts()
        {
            return await _context.Categories
                .Include(x => x.Products)
                    .ThenInclude(x => x.Ingredients)
                .Include(x => x.Products)
                    .ThenInclude(x => x.ProductItems).ToListAsync();
        }
    }
}
