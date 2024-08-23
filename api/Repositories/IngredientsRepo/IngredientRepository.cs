using api.Data;
using api.DTOs.IngredientDTOs;
using api.Mapper.IngredientMap;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.IngredientsRepo
{
    public class IngredientRepository : IIngredientRepository
    {
        private readonly ApplicationDbContext _context;

        public IngredientRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<IngredientFilter>?> GetAllIngredients()
        {
           var result = await _context.Ingredients.ToListAsync();

           return result.ToIngredientFilter();
        }
    }
}
