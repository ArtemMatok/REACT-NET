import { ProductGetWithIngredientsWithItems, ProductShortGet } from "./Product"

export type ProductItemGet = {
   
    productItemId:number,
    price:number,
    size?:number,
    pizzaType?:number,
    prodictId:number,
    product:ProductShortGet
}