import { ProductGetWithIngredients } from "./Product";

export type CategoryGetWithProducts = {
  categoryId:number,
  name:string,
  products:ProductGetWithIngredients[]
};
