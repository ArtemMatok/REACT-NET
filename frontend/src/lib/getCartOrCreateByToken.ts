import { CreateCartWithToken, GetCartByToken } from "@/Shared/Services/Cart"
import Cookies from "js-cookie";

export const getCartOrCreateByToken = async(cartToken:string | undefined) => {
    if(cartToken){
        const cart = await GetCartByToken(cartToken);
        return cart;
    }
    else{
        var newCart = await CreateCartWithToken();
        // localStorage.setItem("cartToken", newCart.token);
        Cookies.set("cartToken",newCart.token )
        return newCart;
    }
}