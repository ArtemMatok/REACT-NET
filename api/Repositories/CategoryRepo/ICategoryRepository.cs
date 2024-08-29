using api.Models;

namespace api.Repositories.CategoryRepo
{
    public interface ICategoryRepository
    {
        Task<List<Category>?> GetAllCategoriesWithFullProduct();
    }
}
