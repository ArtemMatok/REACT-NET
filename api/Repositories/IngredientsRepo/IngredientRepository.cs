using api.Data;
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

        public async Task<List<Ingredient>> GetAllIngredients()
        {
            return await _context.Ingredients.ToListAsync();
        }
    }
}
