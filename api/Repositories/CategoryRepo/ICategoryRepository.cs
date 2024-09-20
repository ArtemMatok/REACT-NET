using api.DTOs.RequestDTOs;
using api.Models;

namespace api.Repositories.CategoryRepo
{
    public interface ICategoryRepository
    {
        List<Category> GetAllCategoriesWithFullProductByIngredients(GetProductSearchParams searchParams);
        Task<List<Category>> GetAllCategoriesWithProducts();
    }
}
