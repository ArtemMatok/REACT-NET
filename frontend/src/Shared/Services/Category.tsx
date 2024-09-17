import { GetProductsByParams } from "@/lib/findPizza";
import { CategoryGetWithProducts } from "@/Shared/Models/Category";
import axios from "axios";

const api = "http://localhost:5002/api/Category/";


export const GetCategoryWithFullProduct = async(params:GetProductsByParams)=> {
    console.log("params:",params);

    //TODO спробувати Update
    const { data } = await axios.get<CategoryGetWithProducts[]>(api + "GetAllCategoriesWithFullProducts",
        {params:params}, 
    );

    return data;
}