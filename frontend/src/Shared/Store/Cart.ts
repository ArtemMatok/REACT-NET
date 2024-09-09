import { create } from "zustand";
import { PizzaSize, PizzaType } from "../Constants/pizza";
import { error } from "console";
import { GetCartByUserIdOrToken, UpdateCartByDeletingCartItem, UpdateCartByItemQuantity } from "../Services/Cart";
import { getCartDetails } from "@/lib";
import { CartStateItem } from "@/lib/getCartDetails";
import { CartGet } from "../Models/Cart";



export interface CartState{
    loading:boolean;
    error:boolean;
    totalAmount:number;
    cartItems:CartStateItem[];
     //CartItems from cart
    getCartItems:(userId?:string, token?:string) => Promise<void>;

    //Update item quantity
    updateItemQuantity:(token:string,cartItemId:number, quantity:number) =>Promise<void>;

    //Add item in cart
    addCartItem: (values:any) => Promise<void>;

    //Delete item from cart
    removeCartItem:(token:string,id:number) => Promise<void>; 
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

    removeCartItem:async(token:string,cartItemId:number) => {
        try {
            set({loading:true, error:false});
            const data = await UpdateCartByDeletingCartItem(token,cartItemId);
            //set data
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({error:true});
        }finally{
            set({loading:false});
        }
    },
    updateItemQuantity:async(token:string,cartItemId:number,quantity:number) => {
        try {
            set({loading:true, error:false});
            const data = await UpdateCartByItemQuantity(token,cartItemId, quantity);
            //set data
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({error:true});
        }finally{
            set({loading:false});
        }
    },
    addCartItem:async(values:any) => {}
}))