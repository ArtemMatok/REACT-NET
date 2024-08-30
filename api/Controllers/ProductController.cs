using api.Repositories.ProductRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet("GetProductsBySearch")]
        public async Task<IActionResult> GetProductsByName(string query)
        {
           
            var result = await _productRepository.GetProductsByName(query);
            if(result == null || result.Count() == 0)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpGet("GetAllProducts")]
        public async Task<IActionResult> GetAllProducts()
        {
            var result = await _productRepository.GetAllProducts();
            if(result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }

        [HttpGet("GetProductById/{productId}")]
        public async Task<IActionResult> GetProductById(int productId)
        {
            var product = await _productRepository.GetProductById(productId);
            if (product is null) return NotFound();

            return Ok(product); 
        }
    }
}
