import { IngredientForProducts } from "./Ingredient";
import { ProductItemGet } from "./ProductItem";

export type CartItemGet= {
    cartItemId:number;
    quantity:number;
    productItemId:number;
    productItem:ProductItemGet;
    ingredients: IngredientForProducts[]
}