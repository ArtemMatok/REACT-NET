using api.DTOs.ProductDTOs;
using System.ComponentModel.DataAnnotations;

namespace api.DTOs.CategoryDTOs
{
    public class CategoryDto
    {
        public int CategoryId { get; set; }
        [Required(ErrorMessage = "Category Name is required")]
        public string? Name { get; set; }
        public List<ProductWithIngredientsDto> Products { get; set; } = new List<ProductWithIngredientsDto>();
    }
}
