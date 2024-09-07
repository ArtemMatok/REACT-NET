import { ProductItemGet } from "./ProductItem";

export type CartItemGet= {
    
    // public int CartItemId { get; set; }
    //     public int Quantity { get; set; } 
        
    //     //Relation
    //     public int ProductItemId { get; set; }
    //     public ProductItem ProductItem { get; set; }
    //     public int CartId { get; set; } 
    //     public Cart Cart { get; set; }  
    //     public List<Ingredient>? Ingredients { get; set; }
    cartItemId:number;
    quantity:number;
    productItemId:number;
    productItem:ProductItemGet;
    cartItem:number;
    
}