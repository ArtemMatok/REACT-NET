import { CreateCartWithToken, GetCartByToken } from "@/Shared/Services/Cart"

export const getCartOrCreateByToken = async(cartToken:string | null) => {
    if(cartToken){
        const cart = await GetCartByToken(cartToken);
        return cart;
    }
    else{
        var newCart = await CreateCartWithToken();
        localStorage.setItem("cartToken", newCart.token);
        return newCart;
    }
}