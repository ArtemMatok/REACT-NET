using api.DTOs.ProductDTOs;
using api.Models;

namespace api.Repositories.ProductRepo
{
    public interface IProductRepository
    {
        Task<List<ProductSearchDto>?> GetProductsByName(string query);
        Task<List<Product>?> GetAllProducts();

    }
}
