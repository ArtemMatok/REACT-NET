import React, { useEffect, useState } from "react";
import {
  Title,
  FilterCheckbox,
  RangeSlider,
  CheckboxFiltersGroup,
} from "../index";
import { Input } from "@/ui/components/ui";
import { useFilterIngredients } from "@/Hooks/useFilterIngredients";
import { useSet } from "react-use";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglepizzaTypes }] = useSet(
    new Set<string>([])
  );

  const [prices, setPrice] = useState<PriceProps>({
    priceFrom: 0,
    priceTo: 100,
  });

  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.ingredientId),
    text: ingredient.name,
  }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };
  useEffect(()=>{
    console.log({prices, pizzaTypes, sizes, selectedIngredients});
  },[prices, pizzaTypes, sizes, selectedIngredients])

  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      {/* Up checkbox */}
      <CheckboxFiltersGroup
        name="sizes"
        className="mb-5"
        title="Pizza types"
        onClickedCheckBox={togglepizzaTypes}
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
        onClickedCheckBox={toggleSizes}
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
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="0"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={100}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom: priceFrom, priceTo: priceTo })
          }
        />
      </div>

      <CheckboxFiltersGroup
        title={"Ingredients"}
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickedCheckBox={onAddId}
        selected={selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};

export default Filters;
