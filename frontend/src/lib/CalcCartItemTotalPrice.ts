import { CartItemGet } from "@/Shared/Models/CartItem";

export const CalcCartItemTotalPrice = (item: CartItemGet): number => {
 
    const ingredients = item.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0) ;
   
    return (ingredients+item.productItem.price)*item.quantity;
};