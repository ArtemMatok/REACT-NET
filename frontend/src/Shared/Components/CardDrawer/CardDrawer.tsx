import React, { PropsWithChildren, useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/components/ui/sheet";
import { Link } from "react-router-dom";
import { Button } from "@/ui/components/ui";
import { ArrowLeft, ArrowRight, Image } from "lucide-react";
import { CardDrawerItem, Title } from "../index";
import { getCartItemDetails } from "@/lib";
import { PizzaSize, PizzaType } from "@/Shared/Constants/pizza";
import Cookies from "js-cookie";
import imageEmptyBox from "../../../../public/assets/images/—Pngtree—empty cartoon box_4696031.png";
import { cn } from "@/ui/ui";
import { useCart } from "@/Shared/Hooks";

interface Props {
  className?: string;
}

export const CardDrawer: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  const token = Cookies.get("cartToken");

  const{totalAmount, updateItemQuantity, cartItems, removeCartItem,} = useCart()
  const [redirecting, setRedirecting] = useState<boolean>();

  const onClickCountButton = (
    cartItemId: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    if (token) {
      updateItemQuantity(token, cartItemId, newQuantity);
    }
  };

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div
          className={cn(
            "flex flex-col h-full",
            !totalAmount && "mt-8"
          )}
        >
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle>
                In basket: <span className="font-bold">{cartItems.length}</span>
              </SheetTitle>
            </SheetHeader>
          )}

          {!totalAmount && (
            <div className="flex flex-col items-center justify-center w-72 mx-auto">
              <img src={imageEmptyBox} width={120} height={120}></img>
              <Title
                size="sm"
                text="Cart is empty"
                className="text-center font-bold my-2"
              ></Title>
              <p className="text-center text-neutral-500 mb-5">
                Add one product to make an order
              </p>

              <SheetClose>
                <Button className="w-56 h-12 text-base" size={"lg"}>
                  <ArrowLeft className="w-5 mr-2" />
                  Go Back
                </Button>
              </SheetClose>
            </div>
          )}

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

          {totalAmount > 0 && (
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
                <Link to="/cart">
                  <Button loading={redirecting} onClick={()=>setRedirecting(true) }type="submit" className="w-full h-12 text-base">
                    Make Order
                    <ArrowRight className="w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </SheetFooter>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CardDrawer;
