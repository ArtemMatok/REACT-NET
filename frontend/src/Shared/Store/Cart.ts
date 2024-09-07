import { create } from "zustand";
import { PizzaSize, PizzaType } from "../Constants/pizza";
import { error } from "console";
import { GetCartByUserIdOrToken } from "../Services/Cart";
import { getCartDetails } from "@/lib";

export type ICartItem = {
    id:number;
    quantity:number;
    name:string;
    imageUrl:string;
    price:number;
    pizzaSize?: number | null//PizzaSize;
    type?:number | null//PizzaType;
    ingredients:Array<{name:string; price:number}>
}

export interface CartState{
    loading:boolean;
    error:boolean;
    totalAmount:number;
    items:ICartItem[];
     //CartItems from cart
    getCartItems:(userId?:string, token?:string) => Promise<void>;

    //Update item quantity
    updateItemQuantity:(id:number, quantity:number) =>Promise<void>;

    //Add item in cart
    addCartItem: (values:any) => Promise<void>;

    //Delete item from cart
    removeCartItem:(id:number) => Promise<void>; 
}

export const useCartState = create<CartState>((set,get) => ({
    items:[],
    error:false, 
    loading:true,
    totalAmount:0,

    getCartItems:async(userId?:string, token?:string) => {
        try {
            set({loading:true, error:false});
            const data = await GetCartByUserIdOrToken(userId, token);
            
            //set data
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({error:true});
        }finally{
            set({loading:false});
        }
    },

    removeCartItem:async(id:number) => {},
    updateItemQuantity:async(id:number, quantity:number) => {},
    addCartItem:async(values:any) => {}
}))