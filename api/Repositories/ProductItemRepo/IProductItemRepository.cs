using api.Models;

namespace api.Repositories.ProductItemRepo
{
    public interface IProductItemRepository
    {
        Task<ProductItem?> GetProductItemByParameters(int productId, int size, int pizzaType);
    }
}
