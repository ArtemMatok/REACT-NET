using api.DTOs.CategoryDTOs;
using api.Models;

namespace api.Repositories.CategoryRepo
{
    public interface ICategoryRepository
    {
        Task<List<CategoryDto>?> GetAllCategoriesWithProducts();
    }
}