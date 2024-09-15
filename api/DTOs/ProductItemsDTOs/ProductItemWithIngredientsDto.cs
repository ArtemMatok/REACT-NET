namespace api.DTOs.ProductItemsDTOs
{
    public class ProductItemWithIngredientsDto
    {
        public int ProductItemId { get; set; }
        public List<int> IngredientsId { get; set; }
    }
}
