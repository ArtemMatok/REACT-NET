
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

// export type GetProductsByParams = {
//   sizes: number[];
//   pizzaTypes: number[];
//   ingredients: number[];
//   priceFrom: number;
//   priceTo: number;
// };

export type GetProductsByParams = {
  ingredients:number[];
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 100;




