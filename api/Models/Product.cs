namespace api.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string? Name { get; set; }
        public string? Image { get; set; }
        //Relation
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public List<Ingredient> Ingredients { get; set; } = new List<Ingredient>();
        public List<ProductItem> ProductItems { get; set; } = new List<ProductItem>();

    }
}
