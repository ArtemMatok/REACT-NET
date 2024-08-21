using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class ProductItem
    {
        public int ProductItemId { get; set; }
        [Required]
        public double Price { get; set; }
        public int? Size { get; set; }   
        public int? PizzaType { get; set; }
        //Relation
        public int ProductId { get; set; }
        public Product Product { get; set; }
        public List<CartItem> CartItems { get; set; } = new List<CartItem>();

    }
}
