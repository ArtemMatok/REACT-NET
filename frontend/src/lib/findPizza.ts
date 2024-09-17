import { GetCategoryWithFullProduct } from "@/Shared/Services/Category";
import { Location } from "react-router-dom";

export interface GetProductSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  ingredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

export type GetProductsByParams = {
  sizes: number[];
  pizzaTypes: number[];
  ingredients: number[];
  priceFrom: number;
  priceTo: number;
};

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 100;

export const findPizzas = async (params: string) => {
  const searchParams = new URLSearchParams(params);
  console.log(searchParams);
  const pizzaTypes = searchParams.get("pizzaTypes")?.split(",").map(Number);
  const sizes = searchParams.get("sizes")?.split(",").map(Number);
  const ingredients = searchParams.get("ingredients")?.split(",").map(Number);
  const priceFrom = Number(searchParams.get("priceFrom")) || DEFAULT_MIN_PRICE;
  const priceTo = Number(searchParams.get("priceTo")) || DEFAULT_MAX_PRICE;

  const productByParams:GetProductsByParams = {
    sizes:sizes || [],
    pizzaTypes:pizzaTypes || [],
    ingredients:ingredients || [],
    priceFrom:priceFrom,
    priceTo:priceTo!,
  }

  console.log("paramsProduct:", productByParams);

  const res = await GetCategoryWithFullProduct(productByParams);

  return res;
};
