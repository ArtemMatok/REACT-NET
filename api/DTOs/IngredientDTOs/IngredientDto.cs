using System.ComponentModel.DataAnnotations;

namespace api.DTOs.IngredientDTOs
{
    public class IngredientDto
    {
        public int IngredientId { get; set; }
        [Required]
        public string Name { get; set; }

        public double Price { get; set; }
        [Required]
        public string Image { get; set; }
    }
}
