import React, { useEffect, useRef } from "react";
import { ProductCard, Title } from "../index/index";
import { cn } from "@/ui/ui";
import{useIntersection} from "react-use"
import { useCategoryStore } from "@/Shared/Store/Category";
import { ProductItemGet } from "@/Shared/Models/ProductItem";
import { ProductGetWithIngredientsWithItems } from "@/Shared/Models/Product";

interface Props {
  className?: string;
  categoryId: number;
  title: string;
  items: ProductGetWithIngredientsWithItems[];
  listClassName?: string;
  onProductClick:(product:ProductGetWithIngredientsWithItems) => void;
}

export const ProductsGroupList: React.FC<Props> = ({
  className,
  categoryId,
  title,
  items,
  listClassName,
  onProductClick
}) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold:0.4
  })

  useEffect(() => {
    if(intersection?.isIntersecting){
      setActiveCategoryId(categoryId)
    }
  },[categoryId,intersection?.isIntersecting, title])

  return <div className={className} id={title} ref={intersectionRef}>
    <Title text={title} size="lg" className="font-extrabold mb-5"/>

    <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
      {
        items.map((product, i) =>(
          <ProductCard 
            key={product.productId}
            id={product.productId}
            name={product.name}
            imageUrl={product.image}
            price={product.productItems[0].price.toString()}
            ingredients={product.ingredients}
            onClick={()=>onProductClick(product)}
          />

        ))
      }
    </div>
  </div>;
};

export default ProductsGroupList;
