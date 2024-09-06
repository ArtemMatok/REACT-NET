using api.Models;
using api.Repositories.CartRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartRepository _cartRepository;

        public CartController(ICartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }

        [HttpGet("GetCartByUserIdOrToken")]
        public async Task<IActionResult> GetCartByUserIdOrToken([FromQuery] string? userId, [FromQuery] string? token)
        {
            if(userId is null && token is null)
            {
                return Ok(new Cart());
            }
            var cart = await _cartRepository.GetCartByUserIdOrByToken(userId, token);
            if (cart is null)
            {
                return NotFound();
            }

            return Ok(cart);    
        }
    }
}
