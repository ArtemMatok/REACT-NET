import React from "react";
import { CheckOutItem, CheckOutItemSkeleton, WhiteBlock } from "../index";
import { getCartItemDetails } from "@/lib";
import { PizzaSize, PizzaType } from "@/Shared/Constants/pizza";
import { CartStateItem } from "@/lib/getCartDetails";
import { Skeleton } from "@/ui/components/ui";

interface Props {
  className?: string;
  cartItems: CartStateItem[];
  cartToken: string;
  loading?: boolean;
  removeCartItem: (token: string, id: number) => void;
  onClickCountButton: (
    cartItemId: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
}

export const CheckoutCart: React.FC<Props> = ({
  cartItems,
  cartToken,
  loading,
  removeCartItem,
  onClickCountButton,
  className,
}) => {
  return (
    <WhiteBlock title="1. Cart" className={className}>
      <div className="flex flex-col gap-5">
        {loading
          ? loading &&
            [...Array(4)].map((_, index) => (
              <CheckOutItemSkeleton key={index} />
            ))
          : cartItems.map((item) => (
              <CheckOutItem
                key={item.cartItemId}
                id={item.cartItemId}
                details={
                  item.size && item.pizzaType
                    ? getCartItemDetails(
                        item.pizzaType as PizzaType,
                        item.size as PizzaSize,
                        item.ingredients
                      )
                    : ""
                }
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onClickCountButton={(type) =>
                  onClickCountButton(item.cartItemId, item.quantity, type)
                }
                onClickRemove={() =>
                  removeCartItem(cartToken!, item.cartItemId)
                }
              />
            ))}
      </div>
    </WhiteBlock>
  );
};

export default CheckoutCart;
