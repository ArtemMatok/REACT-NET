import { useEffect, useState } from "react";
import { Variant } from "../Components/GroupVariants/GroupVariants";
import { PizzaSize, PizzaType } from "../Constants/pizza";
import { useSet } from "react-use";
import { getAvailablePizzaSizes } from "@/lib";
import { ProductItemGet } from "../Models/ProductItem";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  selectedIngredients:Set<number>;
  addIngredient: (id:number) => void;
  availableSizes:Variant[];
}

export const usePizzaOptions = (items: ProductItemGet[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(30);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );
  const availableSizes = getAvailablePizzaSizes(type,items);

  useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  return {
    size,
    type,
    setSize,
    setType,
    selectedIngredients,
    addIngredient,
    availableSizes
  }
};
