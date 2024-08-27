using api.Repositories.CategoryRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryController(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        [HttpGet("GetCategoriesWithFullProductDetails")]
        public async Task<IActionResult> GetAllCategoriesWithProducts()
        {
            var result = await _categoryRepository.GetAllCategoriesWithProducts();
            if(result is null)
            {
                return NotFound();
            }

            return Ok(result);
        }
    }
}
