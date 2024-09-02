import { CategoryGetWithProducts } from "@/Shared/Models/Category";
import axios from "axios";

const api = "http://localhost:5002/api/Category/";


export const GetCategoryWithFullProduct = async()=> {
    const data = await axios.get<CategoryGetWithProducts[]>(api + "GetAllCategoriesWuthFullProducts");
    return data.data;
}