import {  ProductGetWithIngredientsWithItems } from "./Product";

export type CategoryGetWithProducts = {
  categoryId:number,
  name:string,
  products:ProductGetWithIngredientsWithItems[],
};
