import { create } from "zustand";
import { PizzaSize, PizzaType } from "../Constants/pizza";
import { error } from "console";
import { GetCartByUserIdOrToken } from "../Services/Cart";
import { getCartDetails } from "@/lib";
import { CartStateItem } from "@/lib/getCartDetails";



export interface CartState{
    loading:boolean;
    error:boolean;
    totalAmount:number;
    cartItems:CartStateItem[];
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
    cartItems:[],
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