using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Image { get; set; }
        //Relation
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public List<Ingredient> Ingredients { get; set; } = new List<Ingredient>();
        public List<ProductItem> ProductItems { get; set; } = new List<ProductItem>();

    }
}
