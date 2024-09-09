import axios from "axios";
import { CartGet } from "../Models/Cart";

const api = "http://localhost:5002/api/Cart/";

export const GetCartByUserIdOrToken = async (
  userId?: string,
  token?: string
) => {
  if (!userId) {
    const data = await axios.get<CartGet>(
      api + `GetCartByUserIdOrToken?token=${1111}`
    );
    return data.data;
  } else {
    const data = await axios.get<CartGet>(
      api + `GetCartByUserIdOrToken?userId=${userId}`
    );
    return data.data;
  }
};

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
