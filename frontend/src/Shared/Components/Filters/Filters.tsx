import React, { useEffect, useState } from "react";
import {Title,RangeSlider,CheckboxFiltersGroup,} from "../index/index";
import { Input } from "@/ui/components/ui";
import {useIngredients, useFilters,useQueryFilters } from "@/Shared/Hooks/index";
import { useNavigate } from "react-router";
import qs from "qs";

interface Props {
  className?: string;
}



export const Filters: React.FC<Props> = ({ className }) => {
  const {ingredients, loading} = useIngredients();
  const {prices,pizzaTypes,sizes,selectedIngredients, setPrices, setPizzaTypes, setSelectedIngredients, setSizes} = useFilters();
  
  const router = useNavigate();

  useEffect(() => {
      const params = {
        ...prices,
        pizzaTypes: Array.from(pizzaTypes),
        sizes: Array.from(sizes),
        ingredients: Array.from(selectedIngredients),
      };
  
      const query = qs.stringify(params, {
        arrayFormat: "comma",
      });
  
      router(`?${query}`, { replace: true});
    }, [prices,pizzaTypes,sizes,selectedIngredients,router]);
  
  const updatePrices = (prices:number[]) => {
    setPrices("priceFrom", prices[0]);
    setPrices("priceTo", prices[1]);
  }
 

  

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.ingredientId),
    text: ingredient.name,
  }));



  

  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      {/* Up checkbox */}
      <CheckboxFiltersGroup
        name="sizes"
        className="mb-5"
        title="Pizza types"
        onClickedCheckBox={setPizzaTypes}
        selected={pizzaTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Traditional", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        name="sizes"
        className="mb-5"
        title="Size"
        onClickedCheckBox={setSizes}
        selected={sizes}
        items={[
          { text: "30sm", value: "30" },
          { text: "40sm", value: "40" },
          { text: "50sm", value: "50" },
        ]}
      />

      {/* Filter of price  */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => setPrices("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="0"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => setPrices("priceTo", Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={100}
          step={10}
          value={[prices.priceFrom || 0, prices.priceTo || 100]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        title={"Ingredients"}
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickedCheckBox={setSelectedIngredients}
        selected={selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};

export default Filters;
