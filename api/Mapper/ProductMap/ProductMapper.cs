using System.Collections.Generic;
using api.DTOs.ProductDTOs;
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
    }
}