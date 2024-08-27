import { IngredientForProducts } from "./Ingredient"

export type ProductGetSearch = {
    productId: number,
    name:string,
    image:string,
}

export type ProductGetWithIngredients={
    productId: number,
    name:string,
    image:string,
    ingredients:any
}