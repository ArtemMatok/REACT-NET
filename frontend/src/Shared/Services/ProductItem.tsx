import axios from "axios"
import { ProductItemGet, ProductItemWithIngredients } from "../Models/ProductItem"

const api = "http://localhost:5002/api/ProductItem/"

export const GetProductItemByParameters = async (productId:number, size:number, pizzaType:number) => {
    const data = await axios.get<ProductItemGet>(api + `GetProductItemByParameters/${productId}/${size}/${pizzaType}`)
    return data.data;
}