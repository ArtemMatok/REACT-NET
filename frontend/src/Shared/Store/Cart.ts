import { create } from "zustand";

import { GetCartByUserIdOrToken, UpdateCartByAdding, UpdateCartByDeletingCartItem, UpdateCartByItemQuantity } from "../Services/Cart";
import { getCartDetails } from "@/lib";
import { CartStateItem } from "@/lib/getCartDetails";
import { CreateCartItem } from "../Models/ProductItem";



export interface CartState{
    loading:boolean;
    error:boolean;
    totalAmount:number;
    cartItems:CartStateItem[];
     //CartItems from cart
    getCartItems:(userId?:string| undefined, token?:string | undefined) => Promise<void>;

    //Update item quantity
    updateItemQuantity:(token:string,cartItemId:number, quantity:number) =>Promise<void>;

    //Add item in cart
    addCartItem: (values:CreateCartItem) => Promise<void>;

    //Delete item from cart
    removeCartItem:(token:string,id:number) => Promise<void>; 
}

export const useCartState = create<CartState>((set,get) => ({
    cartItems:[],
    error:false, 
    loading:false,
    totalAmount:0,

    getCartItems:async(userId?:string | undefined, cartToken?:string | undefined) => {
        try {
            set({loading:true, error:false});
            const data = await GetCartByUserIdOrToken(userId, cartToken);
            
            if(data){
                set(getCartDetails(data));
            }
           
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
    addCartItem:async(values:CreateCartItem) => {
        try {
            set({loading:true, error:false});
            const data = await UpdateCartByAdding(values);
            //set data
            set(getCartDetails(data));
        } catch (error) {
            console.log(error);
            set({error:true});
        }finally{
            set({loading:false});
        }
    }
}))