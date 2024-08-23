import { IngredientGetFilter } from "@/Models/Ingredient"
import { GetIngredientFilter } from "@/Services/Ingredient"
import { useEffect, useState } from "react"

interface ReturnProps {
    ingredients:IngredientGetFilter[],
    loading:boolean;
}

export const useFilterIngredients = (): ReturnProps => {
    const[ingredients, setIngredients] = useState<IngredientGetFilter[]>([]);
    const[loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getIngredientsFilter = async () => {
            try {
                setLoading(true);
                const result = await GetIngredientFilter();
                setIngredients(result);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false)
            }
        }
        getIngredientsFilter();
    },[])

    return {ingredients, loading};
}