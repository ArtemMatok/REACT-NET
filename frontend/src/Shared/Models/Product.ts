import { IngredientForProducts } from "./Ingredient"
import { ProductItemGet } from "./ProductItem"

export type ProductGetSearch = {
    productId: number,
    name:string,
    image:string,
}

export type ProductShortGet = {
    productId: number,
    name:string,
    image:string,
}

export type ProductGetWithIngredientsWithItems={
    productId: number,
    name:string,
    image:string,
    ingredients:IngredientForProducts[]
    productItems:ProductItemGet[],
}


