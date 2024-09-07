import { CartGet } from "@/Shared/Models/Cart";
import { ICartItem } from "@/Shared/Store/cart";

interface ReturnProps {
    items:ICartItem;
    totalAmount:number;
}
export const getCartDetails = (data:CartGet) => {
    return {
        
    }
}