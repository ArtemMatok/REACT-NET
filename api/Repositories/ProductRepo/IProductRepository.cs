using api.Models;

namespace api.Repositories.ProductRepo
{
    public interface IProductRepository
    {
        Task<List<Product>> GetProductsByName(string query);
    }
}
