
export const getParams = (query:string) => {
    const params = new URLSearchParams(query);
    const ingredientsId = params.get("ingredients")?.split(",").map(Number);
    const pizzaTypes = params.get("pizzaTypes")?.split(",").map(Number);
    const sizes = params.get("sizes")?.split(",").map(Number);
    const priceFrom = Number(params.get("priceFrom")) || 0;
    const priceTo = Number(params.get("priceTo")) || 100;

    return {
        ingredientsId,
        pizzaTypes,
        sizes,
        priceFrom,
        priceTo
    }
}