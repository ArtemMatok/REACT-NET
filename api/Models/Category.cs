using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        [Required(ErrorMessage="Category Name is required")]
        public string? Name { get; set; }
        //Relation
        public List<Product> Products { get; set; } = new List<Product>();
    }
}
