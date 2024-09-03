import { PizzaSize, PizzaType } from "../Shared/Constants/pizza";
import { IngredientForProducts } from "../Shared/Models/Ingredient";
import { ProductItemGet } from "../Shared/Models/ProductItem";

export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItemGet[],
  ingredients: IngredientForProducts[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.ingredientId))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  const totalPrice = pizzaPrice + totalIngredientsPrice;

  return totalPrice;
};
