import { useEffect } from "react";
import { Filters, QueryFilters } from "./useFilters";
import qs from "qs";
import { useNavigate } from "react-router-dom";

export const useQueryFilters = (filters:Filters) => {

    const router = useNavigate();

    useEffect(() => {
        const params = {
          ...filters.prices,
          pizzaTypes: Array.from(filters.pizzaTypes),
          sizes: Array.from(filters.sizes),
          ingredients: Array.from(filters.selectedIngredients),
        };
    
        const query = qs.stringify(params, {
          arrayFormat: "comma",
        });
    
        router(`?${query}`, { replace: true});
      }, [filters, router]);
}