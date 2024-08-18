import React, { useEffect, useRef } from "react";
import { ProductCard, Title } from "../index";
import { cn } from "@/ui/ui";
import{useIntersection} from "react-use"
import { useCategoryStore } from "@/Store/Category";

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
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />

        ))
      }
    </div>
  </div>;
};

export default ProductsGroupList;
