using System.Collections.Generic;
using api.DTOs.ProductDTOs;
using api.Mapper.IngredientMap;
using api.Models;

namespace api.Mapper.ProductMap
{
    public static class ProductMapper
    {
        public static List<ProductSearchDto> ToProductSearchDto(this List<Product> products)
        {
            List<ProductSearchDto> result = new List<ProductSearchDto>();
            foreach (var item in products)
            {
                result.Add(new ProductSearchDto()
                {
                    ProductId = item.ProductId,
                    Name = item.Name,
                    Image = item.Image
                });
            }
            return result;
        }

        public static ProductShortDto ToProductShortDto(this Product product)
        {
            return new ProductShortDto()
            {
                ProductId = product.ProductId,
                Name = product.Name,
                Image = product.Image
            };
        }

        //public static List<ProductDto> ToProductDto (this List<Product> products)
        //{
        //    var productRes = new List<ProductDto>();

        //    foreach (var item in products)
        //    {
        //        productRes.Add(new ProductDto()
        //        {
        //            ProductId= item.ProductId,
        //            Image = item.Image,
        //            Name = item.Name,
        //            Ingredients = item.Ingredients.ToIngreditentDto(),
        //            ProductItems = item.ProductItems
        //        })
        //    }
        //}
    }
}