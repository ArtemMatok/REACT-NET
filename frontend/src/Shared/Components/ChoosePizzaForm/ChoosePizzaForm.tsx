import { IngredientForProducts } from "@/Shared/Models/Ingredient";
import { ProductItemGet } from "@/Shared/Models/ProductItem";
import { cn } from "@/ui/ui";
import React, { useState } from "react";
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

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: IngredientForProducts[];
  items: ProductItemGet[];
  onClickAddCart?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  ingredients,
  items,
  onClickAddCart,
}) => {
  const [size, setSize] = useState<PizzaSize>(30);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const textDetails = `${size}sm, ${mapPizzaType[type]} pizza`;

  //TODO: you need to move to the first variant if pizzaType doesn`t found
  const pizzaPrice = items.find(
    (item) => item.pizzaType === type && item.size === size 
  )?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.ingredientId))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  const totalPrice = pizzaPrice + totalIngredientsPrice;

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      ingredients:selectedIngredients,

    })

  }

  const availablePizza = items.filter((item)=>item.pizzaType === type);
  const availablePizzaSizes = pizzaSizes.map((item) => (
    {
      name:item.name,
      value: item.value,
      disabled: !availablePizza.some((pizza) => Number(pizza.size) === Number(item.value))
    }
  ))


  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-grey-400">{textDetails}</p>

        <div className="flex flex-col gap-5 my-5">
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
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

        <Button onClick={handleClickAdd} className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Add ${totalPrice}
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
