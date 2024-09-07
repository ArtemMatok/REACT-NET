using api.DTOs.CartItemDTOs;
using api.Mapper.IngredientMap;
using api.Mapper.ProductItemMap;
using api.Models;

namespace api.Mapper.CartItemMap
{
    public static class CartItemMapper
    {
        public static List<CartItemDto> ToCartItemsDto(this List<CartItem> cartItems)
        {
            var resCartItems = new List<CartItemDto>();

            foreach (var item in cartItems)
            {
                resCartItems.Add(new CartItemDto()
                {
                    CartItemId = item.CartItemId,
                    Quantity = item.Quantity,
                    ProductItemId = item.ProductItemId,
                    ProductItem = item.ProductItem.ToProductItemWithProductDto(),
                    Ingridents = item.Ingredients?.ToIngreditentDto()
                });

            }
            return resCartItems;    
        }
    }
}
