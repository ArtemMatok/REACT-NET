using api.Data;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static System.Net.Mime.MediaTypeNames;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeedController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SeedController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("Category")]
        public async Task<IActionResult> Categories(int action)
        {
            List<Category> categories = new List<Category>()
        {
            new Category()
            {

                Name ="Pizza"
            },
            new Category()
            {

                Name ="Breakfast"
            },
            new Category()
            {
                Name ="Snack"
            },
            new Category()
            {

                Name ="Cocteils"
            },
            new Category()
            {

                Name ="Drinks"
            }
        };


            if (action == 1)
            {
                _context.Categories.AddRange(categories);
                _context.SaveChanges();

                return Ok("DB was added");
            }
            else
            {
                _context.Categories.RemoveRange(categories);
                _context.SaveChanges();

                return Ok("Db was deleted");
            }
        }



        [HttpPost("Ingredients")]
        public async Task<IActionResult> Ingredients()
        {
            List<Ingredient> ingredients = new List<Ingredient>()
            {
                new Ingredient()
                {
                    Name = "Cheese Side",
                    Price = 5,
                    Image ="https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png"
                },
                new Ingredient()
                {
                        Name = "Creamy mozzarella",
                    Price = 7,
                    Image ="https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png"
                },
                new Ingredient()
                {
                    Name = "Cheddar and Parmesan cheeses",
                    Price = 2,
                    Image ="https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796"
                },
                new Ingredient()
                {
                    Name = "Hot jalapeno pepper",
                    Price = 7,
                    Image ="https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png"
                },
                new Ingredient()
                {
                    Name = "Tender chicken",
                    Price = 10,
                    Image ="https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A"
                },
                new Ingredient()
                {
                    Name = "Tender chicken",
                    Price = 10,
                    Image ="https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A"
                },
                new Ingredient()
                {
                    Name = "Champignons",
                    Price = 4,
                    Image ="https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324"
                },
                new Ingredient()
                {
                    Name = "Ham",
                    Price = 7,
                    Image ="https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61"
                },
                    new Ingredient()
                {
                    Name = "Ham",
                    Price = 7,
                    Image ="https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61"
                },
                new Ingredient()
                {
                    Name = "Spicy pepperoni",
                    Price = 9,
                    Image ="https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3"
                },
                new Ingredient()
                {
                    Name = "Spicy pepperoni",
                    Price = 9,
                    Image ="https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027"
                },
                new Ingredient()
                {
                    Name = "Fresh tomatoes",
                    Price = 5,
                    Image = "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67"
                },
                new Ingredient()
                {
                    Name = "Fresh tomatoes",
                    Price = 5,
                    Image = "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67"
                },
                new Ingredient()
                {
                    Name = "Meatballs",
                    Price = 10,
                    Image = "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png"
                },

            };

            
            _context.Ingredients.AddRange(ingredients.ToHashSet());
            _context.SaveChanges();
            return Ok("Created Inredients");
            
           
        }

        [HttpPost("Products")]
        public async Task<IActionResult> Products()
        {
            List<Product> products = new List<Product>()
            {
                new Product()
                {
                    Name = "Omelet with ham and mushrooms",
                    Image = "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp",
                    CategoryId = 2
                },
                new Product()
                {
                    Name = "Omelette with pepperoni",
                    Image = "https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp",
                    CategoryId = 2
                },
                new Product()
                {
                    Name = "Coffee Latte",
                    Image = "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
                    CategoryId = 2
                },
                new Product()
                {
                    Name = "Danwich ham and cheese",
                    Image = "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp",
                    CategoryId = 3
                },
                new Product()
                {
                    Name = "Chicken nuggets",
                    Image = "https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp",
                    CategoryId = 3
                },
                new Product()
                {
                    Name = "Dodster",
                    Image = "https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp",
                    CategoryId = 3
                },
                new Product()
                {
                    Name = "Banana milkshake",
                    Image = "https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp",
                    CategoryId = 4
                },
                    new Product()
                {
                    Name = " Caramel apple milkshake",
                    Image = "https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp",
                    CategoryId = 4
                },
                new Product()
                {
                    Name = "Irish Cappuccino",
                    Image = "https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp",
                    CategoryId = 5,

                },
                new Product()
                {
                    Name = "Coffee Americano",
                    Image = "https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp",
                    CategoryId = 5,
                },
                new Product()
                {
                    Name = "Coffee Latte",
                    Image = "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
                    CategoryId = 5,
                },
            };

            var existingProductNames = _context.Products.Select(p => p.Name).ToList();

           
            var newProducts = products.Where(p => !existingProductNames.Contains(p.Name)).ToList();

           
            _context.Products.AddRange(newProducts);
            _context.SaveChanges();
            return Ok("Created Products");
        }

        [HttpPost("Pizza")]
        public async Task<IActionResult> Pizza()
        {
            List<Product> pizzas = new List<Product>()
            {
                new Product()
                {
                    Name = "Pepperoni fresh",
                    Image = "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
                    CategoryId = 1,
                    Ingredients = _context.Ingredients.Take(5).ToList()
                },
                new Product()
                {
                    Name = "Cheese Pizza",
                    Image = "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
                    CategoryId = 1,
                    Ingredients = _context.Ingredients.Where(x=>x.IngredientId>4).Take(5).ToList()
                },
                    new Product()
                {
                    Name = "Chorizo ​​fresh",
                    Image = "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
                    CategoryId = 1,
                    Ingredients = _context.Ingredients.Where(x=>x.IngredientId>2).Take(7).ToList()
                },
            };

            var exsistingPizza = _context.Products.Select(p => p.Name).ToList();

            var newProducts = pizzas.Where(x => !exsistingPizza.Contains(x.Name)).ToList();
            _context.Products.AddRange(newProducts);
            _context.SaveChanges();
            return Ok("Created Pizzas");
        }

        [HttpPost("ProductItemPizza")]
        public async Task<IActionResult> ProductItemsPizza()
        {
            List<ProductItem> productItems = new List<ProductItem>()
            {
                new ProductItem()
                {
                    ProductId = _context.Products.Where(x=>x.Name == "Pepperoni fresh").Select(x=>x.ProductId).FirstOrDefault(),
                    Price = 9,
                    PizzaType = 2,
                    Size=30
                },
                new ProductItem()
                {
                    ProductId =  _context.Products.Where(x=>x.Name == "Pepperoni fresh").Select(x=>x.ProductId).FirstOrDefault(),
                    Price = 12,
                    PizzaType = 1,
                    Size=40
                },
                new ProductItem()
                {
                    ProductId =  _context.Products.Where(x=>x.Name == "Pepperoni fresh").Select(x=>x.ProductId).FirstOrDefault(),
                    Price = 15,
                    PizzaType = 1,
                    Size=50
                },
                new ProductItem()
                {
                    ProductId =  _context.Products.Where(x=>x.Name == "Cheese Pizza").Select(x=>x.ProductId).FirstOrDefault(),
                    Price = 11,
                    PizzaType = 2,
                    Size=30
                },
                new ProductItem()
                {
                    ProductId =_context.Products.Where(x=>x.Name == "Cheese Pizza").Select(x=>x.ProductId).FirstOrDefault(),
                    Price = 14,
                    PizzaType = 2,
                    Size=40
                },
                new ProductItem()
                {
                    ProductId =_context.Products.Where(x=>x.Name == "Cheese Pizza").Select(x=>x.ProductId).FirstOrDefault(),
                    Price =18,
                    PizzaType = 2,
                    Size=50
                },
                new ProductItem()
                {
                    ProductId = _context.Products.Where(x=>x.Name == "Chorizo ​​fresh").Select(x=>x.ProductId).FirstOrDefault(),
                    Price =35,
                    PizzaType = 2,
                    Size=50
                },
                new ProductItem()
                {
                    ProductId = _context.Products.Where(x=>x.Name == "Chorizo ​​fresh").Select(x=>x.ProductId).FirstOrDefault(),
                    Price =22,
                    PizzaType =1,
                    Size=30
                },
                 new ProductItem()
                {
                    ProductId = _context.Products.Where(x=>x.Name == "Chorizo ​​fresh").Select(x=>x.ProductId).FirstOrDefault(),
                    Price =25,
                    PizzaType =2,
                    Size=40
                },
            };

            _context.ProductItems.AddRange(productItems);
            _context.SaveChanges();
            return Ok("Created product items");
        }


        [HttpPost("ProductItem")]
        public async Task<IActionResult> ProductItems()
        {
            var random = new Random();
            List<ProductItem> productItems = new List<ProductItem>();

            var products = await _context.Products.Take(11).ToListAsync();
            foreach (var productItem in products)
            {
                productItems.Add(new ProductItem()
                {
                    ProductId = productItem.ProductId,
                    Price = random.Next(4, 12)
                });
            }
           

            _context.ProductItems.AddRange(productItems);
            _context.SaveChanges();
            return Ok("Created product items");
        }

        [HttpPost("Cart")]
        public async Task<IActionResult> Cart()
        {
            var cart = new Cart()
            {
                AppUserId = "ccc9e485-4f49-4287-889d-c32c509599ab",
                TotalAmount = 0,
                Token="1111"
            };

            _context.Carts.Add(cart);
            _context.SaveChanges();
            return Ok("Created Cart");
        }

        [HttpPost("CartItem")]
        public async Task<IActionResult> CartItem()
        {
            var cartItems = new List<CartItem>()
            { 
                new CartItem()
                {
                    ProductItemId = 2,
                    CartId = 1,
                    Quantity = 2,
                    Ingredients = _context.Ingredients.Take(3).ToList(),
                }
            };
            _context.CartItems.AddRange(cartItems);
            _context.SaveChanges();
            return Ok("Created CartItem");

        }

    }
}
