import axios from "axios";
import { CartGet } from "../Models/Cart";

const api = "http://localhost:5002/api/Cart/";

export const GetCartByUserIdOrToken =async (userId?:string, token?:string)=> {
    if(!userId){
        const data = await axios.get<CartGet>(api+`GetCartByUserIdOrToken?token=${1111}`);
        return data.data;
    }
    else{
        const data = await axios.get<CartGet>(api+`GetCartByUserIdOrToken?userId=${userId}`);
        return data.data;
    }
}