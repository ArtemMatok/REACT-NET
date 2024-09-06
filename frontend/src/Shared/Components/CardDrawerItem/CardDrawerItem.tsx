import { cn } from "@/ui/ui";
import React from "react";
import { CartItemImage, CartItemInfo, CartItemPrice, CountButton } from "../index";
import { CartItemsProps } from "../CartItemDetails/CartItemProps";
import { Trash2Icon } from "lucide-react";

interface Props extends CartItemsProps {
  className?: string;
}

export const CardDrawerItem: React.FC<Props> = ({
  id,
  imageUrl,
  name,
  price,
  quantity,
  details,
  className,
}) => {
  return (
    <div className={cn(className, "flex bg-white p-5 gap-6")}>
      <CartItemImage image={imageUrl} />

      <div className="flex-1">
        <CartItemInfo details={details} name={name} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
            <CountButton onClick={(type)=> console.log(type)} value={quantity}/>

            <div className="flex items-center gap-3">
                <CartItemPrice value={price} />
                <Trash2Icon 
                    className="text-gray-400 cursor-pointer hover:text-gray-600"
                    size={16}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CardDrawerItem;
