import React from "react";
import { CartItemsProps } from "../CartItemDetails/CartItemProps";
import { IngredientForProducts } from "@/Shared/Models/Ingredient";
import { cn } from "@/ui/ui";
import { CartItemImage, CartItemInfo, CartItemPrice } from "../index/index";
import { CartItemDetailsCountButton } from "../CartItemDetails/CartItemDetailsCoundButton";
import { X } from "lucide-react";

interface Props extends CartItemsProps {
  className?: string;
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
}

export const CheckOutItem: React.FC<Props> = ({
  name,
  price,
  imageUrl,
  quantity,
  onClickCountButton,
  onClickRemove,
  details,
  className,
}) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
        <div className="flex items-center gap-5 flex-1">
            <CartItemImage image={imageUrl}/>
            <CartItemInfo className="w-1/2" name={name} details={details}/>
        </div>

        <CartItemPrice value={price} />

        <div className="flex items-center gap-5 ml-20">
            <CartItemDetailsCountButton onClick={onClickCountButton} value={quantity}/>
            <button onClick={onClickRemove}>
                <X className="text-gray-400 cursor-pointer hover:text-gray-600" size={20}/>
            </button>
        </div>
    </div>
  )
};

export default CheckOutItem;
