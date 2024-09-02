import { CategoryGetWithProducts } from "@/Shared/Models/Category";
import { useCategoryStore } from "@/Shared/Store/Category";
import { cn } from "@/ui/ui";
import React from "react";

interface Props {
  items:CategoryGetWithProducts[];
  className?: string;
}


export const Categories: React.FC<Props> = ({ className, items }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {items.map(({ name, categoryId }, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === categoryId &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};

export default Categories;
