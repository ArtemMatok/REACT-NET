import {  ProductShortGet } from "./Product"

export type ProductItemGet = {
    productItemId:number,
    price:number,
    size?:number,
    pizzaType?:number,
    productId:number,
    product:ProductShortGet
}

export type CreateCartItem = {
    productItemId:number;
    ingredientsId:number[];
}