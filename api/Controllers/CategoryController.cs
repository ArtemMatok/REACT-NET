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
        private readonly ILogger<CategoryController> _logger;
        public CategoryController(ICategoryRepository categoryRepository, ILogger<CategoryController> logger)
        {
            _categoryRepository = categoryRepository;
            _logger = logger;
        }

        [HttpPut("GetAllCategoriesWithFullProducts")]
        public  async Task<IActionResult> GetAllCategoriesWuthFullProducts(GetProductSearchParams searchParams)
        {
            if (searchParams.IngredientsId is null && searchParams.PizzaTypes is null &&  searchParams.Sizes is null && searchParams.PriceTo == null && searchParams.PriceFrom == null)
            {
                var categoriesAll = await _categoryRepository.GetAllCategoriesWithProducts();
                return Ok(categoriesAll);
            }
            else
            {
                var categories = _categoryRepository.GetAllCategoriesWithFullProductByIngredients(searchParams);
                if (categories is null)
                {
                    return Ok();
                }
                return Ok(categories);
            }

           
        }
    }
}
