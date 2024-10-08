import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Title } from "../index/index";
import { Button } from "@/ui/components/ui";
import { Plus } from "lucide-react";
import { ProductGetWithIngredientsWithItems } from "@/Shared/Models/Product";
import { IngredientForProducts } from "@/Shared/Models/Ingredient";

interface Props {
  className?: string;
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  ingredients: IngredientForProducts[];
  onClick: () => void;
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
  onClick,
  ingredients,
}) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className={className} onClick={onClick}>
      {/* <Link to={`/product/${id}`}> */}
      <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
        <img className="w-[215px] h-[215px]" src={imageUrl} alt="" />
      </div>

      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

      <p className="text-sm text-gray-400">
        {ingredients.map((ingredient) => ingredient.name).join(",")}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          from <b>${price}</b>
        </span>

        <Button variant={"secondary"} className="text-base font-bold">
          <Plus size={20} className="mr-1" />
          Add
        </Button>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ProductCard;
