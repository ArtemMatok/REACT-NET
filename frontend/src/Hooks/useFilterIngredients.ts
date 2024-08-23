import { IngredientGetFilter } from "@/Models/Ingredient"
import { GetIngredientFilter } from "@/Services/Ingredient"
import { useEffect, useState } from "react"
import { useSet } from "react-use";

interface ReturnProps {
    ingredients:IngredientGetFilter[],
    loading:boolean;
    selectedIds:Set<string>;
    onAddId: (id:string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
    const[ingredients, setIngredients] = useState<IngredientGetFilter[]>([]);
    const[loading, setLoading] = useState<boolean>(false);

    const [selectedIds, {toggle}] = useSet(new Set<string>([]))

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

    return {ingredients, loading, onAddId:toggle, selectedIds, };
}