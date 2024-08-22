using api.Models;

namespace api.Repositories.IngredientsRepo
{
    public interface IIngredientRepository
    {
        Task<List<Ingredient>> GetAllIngredients();
    }
}
