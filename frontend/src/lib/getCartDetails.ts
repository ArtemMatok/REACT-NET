import { CartGet } from "@/Shared/Models/Cart";
import { CalcCartItemTotalPrice } from "./CalcCartItemTotalPrice";

export type CartStateItem = {
  cartItemId: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  size?: number | null; //PizzaSize;
  pizzaType?: number | null; //PizzaType;
  ingredients: Array<{ name: string; price: number }>;
};

interface ReturnProps {
  cartItems: CartStateItem[];
  totalAmount: number;
}
export const getCartDetails = (data: CartGet): ReturnProps => {

    console.log("data", data);
    
    const cartItems = data.cartItems.map((item, index) => {
       
        return {
          cartItemId: item.cartItemId,
          quantity: item.quantity,
          name: item.productItem.product.name,
          imageUrl: item.productItem.product.image,
          price: CalcCartItemTotalPrice(item),
          size: item.productItem.size,
          pizzaType: item.productItem.pizzaType,
          ingredients: item.ingredients.map((ingredient) => ({
            name: ingredient.name,
            price: ingredient.price,
          })),
        };
      });
  
  console.log("CartItems:", cartItems);
  return {
    cartItems,
    totalAmount: data.totalAmount,
  };
};
