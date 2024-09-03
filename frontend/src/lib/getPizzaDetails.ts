import { mapPizzaType, PizzaSize, PizzaType } from "@/Shared/Constants/pizza";

export const getPizzaDetails = (size:PizzaSize, type:PizzaType) => {
    return `${size}sm, ${mapPizzaType[type]} pizza`;

}