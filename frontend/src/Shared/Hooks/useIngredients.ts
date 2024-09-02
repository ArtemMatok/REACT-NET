import { IngredientGetFilter } from "@/Shared/Models/Ingredient";
import { GetIngredientFilter } from "@/Shared/Services/Ingredient";
import { useEffect, useState } from "react";

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState<IngredientGetFilter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getIngredientsFilter = async () => {
      try {
        setLoading(true);
        const result = await GetIngredientFilter();
        setIngredients(result);
      } catch (error) {
        setLoading(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getIngredientsFilter();
  }, []);

  return {
    ingredients,
    loading,
  };
};
