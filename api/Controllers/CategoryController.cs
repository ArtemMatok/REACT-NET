using api.Models;
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

        [HttpGet("GetAllCategoriesWuthFullProducts")]
        public async Task<IActionResult> GetAllCategoriesWuthFullProducts()
        {
            var result = await _categoryRepository.GetAllCategoriesWithFullProduct();

            if(result is null)
            {
                return Ok(new List<Category>());
            }
            return Ok(result);
        }
    }
}
