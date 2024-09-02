import { ProductGetWithIngredientsWithItems } from "./Product"

export type ProductItemGet = {
    // public int ProductItemId { get; set; }
    // [Required]
    // public double Price { get; set; }
    // public int? Size { get; set; }   
    // public int? PizzaType { get; set; }
    // //Relation
    // public int ProductId { get; set; }
    // public Product Product { get; set; }

    productItemId:number,
    price:number,
    size?:number,
    pizzaType?:number,
    prodictId:number,
    product:ProductGetWithIngredientsWithItems
}