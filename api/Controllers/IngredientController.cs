using api.Models;
using api.Repositories.IngredientsRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        private readonly IIngredientRepository _ingredientRepository;

        public IngredientController(IIngredientRepository ingredientRepository)
        {
            _ingredientRepository = ingredientRepository;
        }

        [HttpGet("GetAllIngredients")]
        public async Task<IActionResult> GetAllIngredients()
        {
            var result = await _ingredientRepository.GetAllIngredients();
            if(result is null || result.Count == 0)
            {
                return BadRequest("There wasn`t found any ingredients");
            }

            return Ok(result);
        }
    }
}
