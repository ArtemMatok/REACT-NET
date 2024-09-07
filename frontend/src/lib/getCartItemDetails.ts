import { mapPizzaType, PizzaSize, PizzaType } from "@/Shared/Constants/pizza";
import { IngredientForProducts } from "@/Shared/Models/Ingredient";
import { CartStateItem } from "./getCartDetails";

export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients: CartStateItem["ingredients"]
):string => {
  const details = [];
  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} sm`);
  }
  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};
