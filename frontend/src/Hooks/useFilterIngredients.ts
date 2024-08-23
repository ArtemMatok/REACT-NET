import { IngredientGetFilter } from "@/Models/Ingredient"
import { GetIngredientFilter } from "@/Services/Ingredient"
import { useEffect, useState } from "react"

interface ReturnProps {
    ingredients:IngredientGetFilter[],
}

export const useFilterIngredients = (): ReturnProps => {
    const[ingredients, setIngredients] = useState<IngredientGetFilter[]>([]);
    useEffect(() => {
        const getIngredientsFilter = async () => {
            try {
                const result = await GetIngredientFilter();
                setIngredients(result);
            } catch (error) {
                console.log(error);
            }
        }
        getIngredientsFilter();
    },[])

    return {ingredients};
}