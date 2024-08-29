using api.Models;
using System.ComponentModel.DataAnnotations;

namespace api.DTOs.ProductItemsDTOs
{
    public class ProductItemDto
    {
        public int ProductItemId { get; set; }
        [Required]
        public double Price { get; set; }
        public int? Size { get; set; }
        public int? PizzaType { get; set; }
        //Relation
        public int ProductId { get; set; }
        
    }
}
