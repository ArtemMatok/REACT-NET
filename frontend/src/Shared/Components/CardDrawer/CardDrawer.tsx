import React, { PropsWithChildren, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/components/ui/sheet";
import { Link } from "react-router-dom";
import { Button } from "@/ui/components/ui";
import { ArrowRight } from "lucide-react";
import { CardDrawerItem } from "../index";
import { getCartItemDetails } from "@/lib";
import { useCartState } from "@/Shared/Store/Cart";
import { PizzaSize, PizzaType } from "@/Shared/Constants/pizza";
import Cookies from "js-cookie";

interface Props {
  className?: string;
}

export const CardDrawer: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  const token = Cookies.get("cartToken");

  const [
    totalAmount,
    getCartItems,
    cartItems,
    UpdateCartByItemQuantity,
    removeCartItem,
  ] = useCartState((state) => [
    state.totalAmount,
    state.getCartItems,
    state.cartItems,
    state.updateItemQuantity,
    state.removeCartItem,
  ]);

  useEffect(() => {
    if (token) {
      getCartItems(undefined, token);
    }
  }, []);

  const onClickCountButton = (
    cartItemId: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    if (token) {
      UpdateCartByItemQuantity(token, cartItemId, newQuantity);
    }
  };

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            In basket: <span className="font-bold">{cartItems.length}</span>
          </SheetTitle>
        </SheetHeader>

        <div className="mx-6 mt-5 overflow-auto scrollbar flex-1">
          {cartItems.map((item) => (
            <div key={item.cartItemId} className="mb-2">
              <CardDrawerItem
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
                onClickRemove={() => removeCartItem(token!, item.cartItemId)}
              />
            </div>
          ))}
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Sum:
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
              </span>

              <span className="font-bold text-lg">${totalAmount}</span>
            </div>
            {/* <Link to="/chart">
              <Button type="submit" className="w-full h-12 text-base">
                Make Order
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link> */}
            <Link to="/chart">
              <Button type="submit" className="w-full h-12 text-base">
                Make Order
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CardDrawer;
