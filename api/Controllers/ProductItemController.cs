using api.Mapper.ProductItemMap;
using api.Repositories.ProductItemRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductItemController : ControllerBase
    {
        private readonly IProductItemRepository _productItemRepository;

        public ProductItemController(IProductItemRepository productItemRepository)
        {
            _productItemRepository = productItemRepository;
        }

        [HttpGet("GetProductItemByParameters/{productId}/{size}/{pizzaType}")]
        public async Task<IActionResult> GetProductItemByParameters(int productId, int size, int pizzaType)
        {
            var productItem = await _productItemRepository.GetProductItemByParameters(productId, size, pizzaType);

            if(productItem is null)
            {
                return NotFound();
            }

            return Ok(productItem.ToProductItemWithProductDto());
        }
    }
}
