import { Variant } from "@/Shared/Components/GroupVariants/GroupVariants";
import { PizzaSize, pizzaSizes, PizzaType } from "@/Shared/Constants/pizza";
import { ProductItemGet } from "@/Shared/Models/ProductItem";



export const getAvailablePizzaSizes = (type:PizzaType, items:ProductItemGet[]):Variant[] => {
    const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
    const availablePizzaSizes = pizzaSizes.map((item) => ({
      name: item.name,
      value: item.value,
      disabled: !filteredPizzasByType.some(
        (pizza) => Number(pizza.size) === Number(item.value)
      ),
    }));

    return availablePizzaSizes
}