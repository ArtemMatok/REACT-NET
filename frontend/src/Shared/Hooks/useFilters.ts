import { useNavigate, useSearchParams } from "react-router-dom";

import { useSet } from "react-use";
import { useState } from "react";
import { Filters } from "@/Shared/Components/index/index";

export interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export interface Filters {
  sizes:Set<string>,
  pizzaTypes:Set<string>,
  selectedIngredients:Set<string>,
  prices:PriceProps,
}

 interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void,
  setPizzaTypes:(key: string) => void,
  setSizes:(key: string) => void,
  setSelectedIngredients:(key: string) => void,
}


export const useFilters = ():ReturnProps => {

  const [searchParams] = useSearchParams();

  //Ingredients
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(","))
  );

  //Size
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );

  //PizzaType
  const [pizzaTypes, { toggle: togglepizzaTypes }] = useSet(
    new Set<string>(
      searchParams.has("pizzaTypes")
        ? searchParams.get("pizzaTypes")?.split(",")
        : []
    )
  );

  //Price
  const [prices, setPrice] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice((prev) => ({
      ...prev,
      [name]:value,
    }));
  };



  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    prices,
    setPrices:updatePrice,
    setPizzaTypes:togglepizzaTypes,
    setSizes:toggleSizes,
    setSelectedIngredients:toggleIngredients
  }
};
