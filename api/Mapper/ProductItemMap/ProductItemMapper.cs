using api.DTOs.ProductItemsDTOs;
using api.Mapper.ProductMap;
using api.Models;

namespace api.Mapper.ProductItemMap
{
    public static class ProductItemMapper
    {
        public static ProductItemWithProductDto ToProductItemWithProductDto(this ProductItem productItem)
        {
            return new ProductItemWithProductDto()
            {
                ProductItemId = productItem.ProductId,
                Price = productItem.Price,
                Size = productItem.Size,
                PizzaType = productItem.PizzaType,
                ProductId = productItem.ProductId,
                Product = productItem.Product.ToProductShortDto()
            };

        }
    }
}
