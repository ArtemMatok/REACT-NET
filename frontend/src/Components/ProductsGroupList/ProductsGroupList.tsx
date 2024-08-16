import React from "react";
import { Title } from "../index";

interface Props {
  className?: string;
  categoryId: number;
  title: string;
  items: any[];
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  className,
  categoryId,
  title,
  items,
  listClassName,
}) => {
  return <div className={className}>
    <Title text={title} size="lg" className="font-extrabold mb-5"/>
  </div>;
};

export default ProductsGroupList;
