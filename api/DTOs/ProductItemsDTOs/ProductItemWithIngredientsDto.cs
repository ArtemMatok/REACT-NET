namespace api.DTOs.ProductItemsDTOs
{
    public class ProductItemWithIngredientsDto
    {
        public ProductItemWithProductDto ProductItem { get; set; }
        public List<int> IngredientsId { get; set; } = new List<int>();
    }
}
