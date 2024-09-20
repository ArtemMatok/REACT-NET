
import axios from "axios";
import { CategoryGetWithProducts } from "../Models/Category";
import { getParams } from "@/lib/getParams";

const api = "http://localhost:5002/api/Category/";


export type GetProductSearchParams = {
    ingredients?:number[]
}

export const GetCategoriesWithProducts =  async(query:string) => {
    const{ingredientsId, pizzaTypes, sizes,priceFrom,priceTo} = getParams(query);


    const data = await axios.put<CategoryGetWithProducts[]>(api+`GetAllCategoriesWithFullProducts`, {ingredientsId,pizzaTypes,sizes,priceFrom,priceTo});

    return data.data;
}