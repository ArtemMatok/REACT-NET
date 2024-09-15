import { IngredientForProducts } from "@/Shared/Models/Ingredient";
import { ProductItemGet, CreateCartItem } from "@/Shared/Models/ProductItem";
import { cn } from "@/ui/ui";
import React, { useEffect, useState } from "react";
import { IngredientItem, PizzaImage, Title } from "../index/index";
import { Button } from "@/ui/components/ui";
import { GroupVariants } from "../GroupVariants/GroupVariants";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/Shared/Constants/pizza";
import { useSet } from "react-use";
import { calcTotalPizzaPrice, getAvailablePizzaSizes, getPizzaDetails } from "@/lib/index";
import { usePizzaOptions } from "@/Shared/Hooks";
import { ProductShortGet } from "@/Shared/Models/Product";
import { GetProductItemByParameters } from "@/Shared/Services/ProductItem";
import { UpdateCartByAdding } from "@/Shared/Services/Cart";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: IngredientForProducts[];
  items: ProductItemGet[];
  onSubmit: (prouctItemId:number, ingredientId:number[]) => void;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  ingredients,
  items,
  onSubmit,
}) => {
 
  const {size, pizzaType, selectedIngredients,availableSizes,setSize, setPizzaType, addIngredient,currentProuctItemId} = usePizzaOptions(items);

  

  const totalPrice = calcTotalPizzaPrice(
    pizzaType,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  const textDetails = getPizzaDetails(size, pizzaType);  


  const handleClickAdd =async () => {
    if(currentProuctItemId){
      onSubmit(currentProuctItemId, Array.from(selectedIngredients))
    }
    
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-grey-400">{textDetails}</p>

        <div className="flex flex-col gap-5 my-5">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(pizzaType)}
            onClick={(value) => setPizzaType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.ingredientId}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.image}
                active={selectedIngredients.has(ingredient.ingredientId)}
                onClick={() => addIngredient(ingredient.ingredientId)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Add ${totalPrice}
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
