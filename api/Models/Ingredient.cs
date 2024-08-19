using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Ingredient
    {
        public int IngredientId { get; set; }
        [Required(ErrorMessage = "Ingredient name is required")]
        public string Name { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
        //Relation
        public List<Product> Products { get; set; } = new List<Product>();

    }
}
