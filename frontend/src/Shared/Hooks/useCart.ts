import { useEffect } from "react";
import { useCartState } from "../Store/Cart";
import Cookies from "js-cookie";
import { CartStateItem } from "@/lib/getCartDetails";
import { CreateCartItem } from "../Models/ProductItem";

type ReturnProps = {
  totalAmount:number;
  cartItems:CartStateItem[];
  loading:boolean;
  updateItemQuantity:(token: string, cartItemId: number, quantity: number) =>void;
  removeCartItem:(token: string, id: number) => void;
  addCartItem:(values:CreateCartItem) => void;
}

export const useCart = ():ReturnProps => {
  const cartToken = Cookies.get("cartToken");

  const cartState = useCartState((state) => state);

  useEffect(() => {
    
    if (cartToken) {
      cartState.getCartItems(undefined, cartToken);
    }
  }, []);

  return cartState;
};
