using api.DTOs.CartDTOs;
using api.Mapper.CartItemMap;
using api.Models;

namespace api.Mapper.CartMap
{
    public static class CartMapper
    {
        public static CartDto ToCartDto(this Cart cart)
        {
            return new CartDto()
            {
                CartId = cart.CartId,
                TotalAmount = cart.TotalAmount,
                Token = cart.Token,
                AppUserId = cart.AppUserId,
                CartItems = cart.CartItems.ToCartItemsDto()
            };

        }
    }
}