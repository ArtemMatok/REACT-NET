import { useEffect, useState } from "react";
import { Variant } from "../Components/GroupVariants/GroupVariants";
import { PizzaSize, PizzaType } from "../Constants/pizza";
import { useSet } from "react-use";
import { getAvailablePizzaSizes } from "@/lib";
import { ProductItemGet } from "../Models/ProductItem";
import { GetProductItemByParameters } from "../Services/ProductItem";

interface ReturnProps {
  size: PizzaSize;
  pizzaType: PizzaType;
  setSize: (size: PizzaSize) => void;
  setPizzaType: (type: PizzaType) => void;
  selectedIngredients:Set<number>;
  addIngredient: (id:number) => void;
  availableSizes:Variant[];
  currentProuctItemId?:number;
}

export const usePizzaOptions = (items: ProductItemGet[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(30);
  const [pizzaType, setPizzaType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const availableSizes = getAvailablePizzaSizes(pizzaType,items);
  const currentProuctItemId = items.find(x=>x.pizzaType === pizzaType && x.size === size)?.productItemId;


  useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }

  }, [pizzaType]);

  return {
    size,
    pizzaType,
    setSize,
    setPizzaType,
    selectedIngredients,
    addIngredient,
    availableSizes,
    currentProuctItemId
  }
};
