import { IngredientForProducts } from "@/Models/Ingredient";
import { ProductItemGet } from "@/Models/ProductItem";
import { cn } from "@/ui/ui";
import React from "react";
import { ProductImage, Title } from "../index/index";
import { Button } from "@/ui/components/ui";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  ingredients: IngredientForProducts[];
  items?: ProductItemGet[];
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  ingredients,
  items,
  onClickAdd,
}) => {
  const textDetails = `40sm, traditional dough 30`;
  const totalPrice = 12;
  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} size={40} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-grey-400">{textDetails}</p>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Add ${totalPrice}
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
