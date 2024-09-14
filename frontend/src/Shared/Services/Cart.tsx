import axios from "axios";
import { CartGet } from "../Models/Cart";
import { getCartOrCreateByToken } from "@/lib";
import { ProductGetWithIngredientsWithItems } from "../Models/Product";
import { ProductItemWithIngredients } from "../Models/ProductItem";

const api = "http://localhost:5002/api/Cart/";

export const GetCartByUserIdOrToken = async (
  userId?: string,
  cartToken?:string
) => {
  if(cartToken){
    const data = await axios.get<CartGet>(
      api + `GetCartByUserIdOrToken?token=${cartToken}`
    );  
    console.log(data.data);
    return data.data;
  }
  else if (userId) {
    const data = await axios.get<CartGet>(
      api + `GetCartByUserIdOrToken?userId=${userId}`
    );
    return data.data;
  }
};

export const GetCartByToken = async (cartToken:string) => {
  const data = await axios.get<CartGet>(
    api + `GetCartByUserIdOrToken?token=${cartToken}`
  );  
  return data.data;
}

export const UpdateCartByItemQuantity = async (
  token: string,
  cartItemId: number,
  quantity: number
) => {
  const data = await axios.put<CartGet>(
    api + `UpdateCartByItemQuantity/${token}/${cartItemId}/${quantity}`
  );
  return data.data;
};

export const UpdateCartByDeletingCartItem = async (
  token: string,
  cartItemId: number
) => {
    const data = await axios.delete<CartGet>(api + `UpdateCartByDeletingCartItem/${token}/${cartItemId}`);

    return data.data;
};


export const CreateCartWithToken = async() => {
  const data = await axios.post<CartGet>(api + "CreateCartWithToken");
  return data.data;
}

export const UpdateCartByAdding = async(productItemWithIngredients:ProductItemWithIngredients) => {
  let cartToken = localStorage.getItem("cartToken");

  const userCart = await getCartOrCreateByToken(cartToken);

  if(!cartToken){
    cartToken = localStorage.getItem("cartToken");
  }
 
    const data = await axios.put<CartGet>(api+`UpdateCartByAdding/${userCart.cartId}`, productItemWithIngredients);
    return data.data
}