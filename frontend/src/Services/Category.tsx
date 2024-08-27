import { CategoryGetWithProducts } from "@/Models/Category"
import axios from "axios"

const api = "http://localhost:5002/api/Category/"

export const GetCategoriesWithProductsWithIngredients = async() => {
    const data = await axios.get<CategoryGetWithProducts[]>(api + "GetAllCategoriesWithProducts");
    return data.data
}