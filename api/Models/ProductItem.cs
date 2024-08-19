namespace api.Models
{
    public class ProductItem
    {
        public int ProductItemId { get; set; }
        public double Price { get; set; }
        public int? Size { get; set; }   
        //Relation
        public int ProductId { get; set; }
        public Product Product { get; set; }

    }
}
