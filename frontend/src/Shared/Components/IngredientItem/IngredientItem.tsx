import { IngredientForProducts } from "@/Shared/Models/Ingredient";
import { cn } from "@/ui/ui";
import { CircleCheck } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
}

export const IngredientItem: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  price,
  active,
  onClick,
}) => {
  return (
    <div
      className={cn(
        className,
        "relative flex items-center flex-col p-1 rounded-md w-32 text-center cursor-pointer shadow-md bg-white",
        { "border border-primary": active }
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute top-1 right-1 text-primary" />
      )}
      <img src={imageUrl} width={110} height={110} />
      <span className="text-xs mb-1">{name}</span>
      <span className="font-bold">${price}</span>
    </div>
  );
};

export default IngredientItem;
