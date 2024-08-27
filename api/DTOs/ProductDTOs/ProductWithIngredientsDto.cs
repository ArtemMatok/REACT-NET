using api.DTOs.IngredientDTOs;

namespace api.DTOs.ProductDTOs
{
    public class ProductWithIngredientsDto
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
     
        public string Image { get; set; }
        public List<IngredientDto> Ingredients { get; set; } = new List<IngredientDto>();
    }
}
