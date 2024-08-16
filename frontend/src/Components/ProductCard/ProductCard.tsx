import React from "react";
import { Link } from "react-router-dom";
import { Title } from "../index";

interface Props {
  className?: string;
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link to={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt="" />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        
        <p className="text-sm text-gray-400"></p>
      </Link>
    </div>
  );
};

export default ProductCard;
