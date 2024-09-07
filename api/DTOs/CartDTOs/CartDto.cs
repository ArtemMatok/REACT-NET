using api.DTOs.CartItemDTOs;
using api.DTOs.IngredientDTOs;
using api.Models;
using System.ComponentModel.DataAnnotations;

namespace api.DTOs.CartDTOs
{
    public class CartDto
    {
        public int CartId { get; set; }
        public double TotalAmount { get; set; } = 0;
        public string Token { get; set; }
        public string? AppUserId { get; set; }
        public List<CartItemDto> CartItems { get; set; } = new List<CartItemDto>();
    }

}