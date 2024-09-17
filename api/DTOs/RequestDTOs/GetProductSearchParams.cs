namespace api.DTOs.RequestDTOs
{
    public class GetProductSearchParams
    {
        public List<int>? Sizes { get; set; }
        public List<int>? PizzaTypes { get; set; }
        public List<int>? IngredientsId { get; set; }
        public int? PriceFrom { get; set; }  
        public int? PriceTo { get; set; }

    }
}
