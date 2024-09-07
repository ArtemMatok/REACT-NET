import { CartItemGet } from "./CartItem";

export type CartGet = {
    cartId:number;
    totalAmount:number;
    token:string;
    appUserId?:string;
    cartItems:CartItemGet[];
}