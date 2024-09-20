using api.DTOs.ProductDTOs;
using System.ComponentModel.DataAnnotations;

namespace api.DTOs.CategoryDTOs
{
    public class CategoryDto
    {
        public int CategoryId { get; set; }
       
        public string? Name { get; set; }
        public List<ProductDto> Products { get; set; } = new List<ProductDto>();
    }
}
