using api.DTOs.IngredientDTOs;
using api.Models;

namespace api.Mapper.IngredientMap
{
    public static class IngredientMapper
    {
        public static List<IngredientFilter> ToIngredientFilter(this List<Ingredient> ingredients)
        {
            var ingredientsFilter = new List<IngredientFilter>();

            foreach (var item in ingredients)
            {
                ingredientsFilter.Add(new IngredientFilter()
                {
                    IngredientId = item.IngredientId,
                    Name = item.Name,
                });
            }
            return ingredientsFilter;
        }

        public static List<IngredientDto> ToIngreditentDto(this List<Ingredient> ingredients)
        {
            var resultIngredients = new List<IngredientDto>();
            foreach (var item in ingredients)
            {
                resultIngredients.Add(new IngredientDto()
                {
                    IngredientId = item.IngredientId,
                    Name = item.Name,
                    Price = item.Price,
                    Image = item.Image
                });
            }

            return resultIngredients;
        }
    }
}