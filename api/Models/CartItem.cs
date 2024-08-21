namespace api.Models
{
    public class CartItem
    {
        public int CartItemId { get; set; }
        public int Quantity { get; set; } 
        
        //Relation
        public int ProductItemId { get; set; }
        public ProductItem ProductItem { get; set; }
        public int CartId { get; set; } 
        public Cart Cart { get; set; }  
        public List<Ingredient>? Ingredients { get; set; }
    }
}
