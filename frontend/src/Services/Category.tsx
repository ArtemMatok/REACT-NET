import { CategoryGetWithProducts } from "@/Models/Category"
import axios from "axios"

const api = "http://localhost:5002/api/Category/"

export const GetCategoriesWithProductsWithIngredients = async() => {
    const data = await axios.get<CategoryGetWithProducts[]>(api + "GetAllCategoriesWithProductsWithIngredients");
    return data.data
}