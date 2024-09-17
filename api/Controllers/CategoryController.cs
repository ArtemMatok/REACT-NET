using api.DTOs.RequestDTOs;
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

        [HttpGet("GetAllCategoriesWithFullProducts")]
        public async Task<IActionResult> GetAllCategoriesWuthFullProducts(GetProductSearchParams searchParams)
        {
            var result = await _categoryRepository.GetAllCategoriesWithFullProduct(searchParams);

            if(result is null)
            {
                return Ok(new List<Category>());
            }
            return Ok(result);
        }
    }
}
