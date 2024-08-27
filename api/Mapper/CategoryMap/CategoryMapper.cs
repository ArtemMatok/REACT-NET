using api.DTOs.CategoryDTOs;
using api.DTOs.ProductDTOs;
using api.Models;
using api.DTOs.IngredientDTOs;
namespace api.Mapper.CategoryMap
{
    public static  class CategoryMapper
    {
        public static List<CategoryDto> ToCategoryDto(this List<Category> categories, List<Product> products, List<Ingredient> ingredients, List<ProductItem> productsItem)
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
                        .Select(p => new ProductDto
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
                                }).ToList(),
                            ProductItems = productsItem
                                .Where(i => p.ProductItems.Select(pi => pi.ProductItemId).Contains(i.ProductItemId))
                                .Select(x=> new DTOs.ProductItemsDTOs.ProductItemDto
                                { 
                                    ProductItemId = x.ProductItemId,
                                    ProductId = x.ProductId,
                                    Size = x.Size,
                                    Price= x.Price,
                                    PizzaType = x.PizzaType,   
                                }).ToList()

                           
                        }).ToList()
                });
            }

            return categoriesDto;

        }
    }
}
