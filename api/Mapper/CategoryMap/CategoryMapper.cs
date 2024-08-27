using api.DTOs.CategoryDTOs;
using api.DTOs.ProductDTOs;
using api.Models;
using api.DTOs.IngredientDTOs;
namespace api.Mapper.CategoryMap
{
    public static  class CategoryMapper
    {
        public static List<CategoryDto> ToCategoryDto(this List<Category> categories, List<Product> products, List<Ingredient> ingredients)
        {
            var categoriesDto = new List<CategoryDto>();

            
            foreach (var item in categories)
            {
                categoriesDto.Add(new CategoryDto()
                {
                    CategoryId = item.CategoryId,
                    Name = item.Name,
                    Products = products
                        .Where(x => x.CategoryId == item.CategoryId)
                        .Select(p => new ProductWithIngredientsDto
                        {
                            ProductId = p.ProductId,
                            Name = p.Name,
                            Image = p.Image,
                            Ingredients = ingredients
                                .Where(i => p.Ingredients.Select(pi => pi.IngredientId).Contains(i.IngredientId))
                                .Select(i => new IngredientDto
                                {
                                    IngredientId = i.IngredientId,
                                    Name = i.Name,
                                    Price = i.Price,
                                    Image = i.Image,
                                }).ToList()
                        }).ToList()
                });
            }

            return categoriesDto;

        }
    }
}
