import { ProductGetWithIngredientsWithItems } from "./Product"

export type ProductItemGet = {
   
    productItemId:number,
    price:number,
    size?:number,
    pizzaType?:number,
    prodictId:number,
    product:ProductGetWithIngredientsWithItems
}