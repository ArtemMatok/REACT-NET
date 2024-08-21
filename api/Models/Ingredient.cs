using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Ingredient
    {
        public int IngredientId { get; set; }
        [Required(ErrorMessage = "Ingredient name is required")]
        public string Name { get; set; }
        [Required]
        public double Price { get; set; }
        [Required]
        public string Image { get; set; }
        //Relation
        public List<Product> Products { get; set; } = new List<Product>();
        public List<CartItem> CartItems { get; set; } = new List<CartItem>();

    }
}
