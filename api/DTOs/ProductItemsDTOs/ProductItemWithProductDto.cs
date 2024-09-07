using api.DTOs.CartDTOs;
using api.DTOs.ProductDTOs;

namespace api.DTOs.ProductItemsDTOs
{
    public class ProductItemWithProductDto
    {
        public int ProductItemId { get; set; }

        public double Price { get; set; }
        public int? Size { get; set; }
        public int? PizzaType { get; set; }

        public int ProductId { get; set; }
        public ProductShortDto Product { get; set; }
    }
}
