import {IngredientGetFilter } from "@/Shared/Models/Ingredient"
import axios from "axios"

const api = "http://localhost:5002/api/Ingredient/"

export const GetIngredientFilter = async () => {
    const data = await axios.get<IngredientGetFilter[]>(api + 'GetAllIngredientsFilter');
    return data.data;
}