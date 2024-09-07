using api.DTOs.IngredientDTOs;
using api.DTOs.ProductItemsDTOs;

namespace api.DTOs.CartItemDTOs
{
    public class CartItemDto
    {
        public int CartItemId { get; set; }
        public int Quantity { get; set; }
        public int ProductItemId { get; set; }
        public ProductItemWithProductDto ProductItem { get; set; }
        public List<IngredientDto>? Ingridents { get; set; } = new List<IngredientDto>();
    }
}
