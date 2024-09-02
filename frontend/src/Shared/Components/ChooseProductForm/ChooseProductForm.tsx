import { IngredientForProducts } from "@/Shared/Models/Ingredient";
import { ProductItemGet } from "@/Shared/Models/ProductItem";
import { cn } from "@/ui/ui";
import React from "react";
import {  Title } from "../index/index";
import { Button } from "@/ui/components/ui";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  onClickAdd?: VoidFunction;
}

export const ChooseProductForm: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  onClickAdd,
}) => {
  const textDetails = `40sm, traditional dough 30`;
  const totalPrice = 12;
  return (
    <div className={cn(className, "flex flex-1")}>
      <div
        className={cn(
          "flex items-center justify-center flex-1 relative w-full",
          className
        )}
      >
        <img
          src={imageUrl}
          alt="logo"
          className={cn(
            "relative left-[-1.7rem] top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
          )}
        />
      </div>

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

export default ChooseProductForm;
