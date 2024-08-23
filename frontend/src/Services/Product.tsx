import { ProductGetSearch } from "@/Models/Product";
import axios from "axios";

const api = "http://localhost:5002/api/Product/"


export const GetProductsBySearch = async (query:string) => {

    const data = await axios.get<ProductGetSearch[]>(api + `GetProductsBySearch?query=${query}`)
    return data;
  
}