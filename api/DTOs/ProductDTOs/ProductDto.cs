using api.DTOs.IngredientDTOs;
using api.DTOs.ProductItemsDTOs;

namespace api.DTOs.ProductDTOs
{
    public class ProductDto
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
     
        public string Image { get; set; }
        public List<IngredientDto> Ingredients { get; set; } = new List<IngredientDto>();
         public List<ProductItemDto> ProductItems { get; set; } = new List<ProductItemDto>();
    }
}
