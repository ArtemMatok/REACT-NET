import { cn } from "@/ui/ui";
import { Container,Categories, SortPopup } from "../index/index";
import React from "react";
import { CategoryGetWithProducts } from "@/Shared/Models/Category";

interface Props {
  className?: string;
  categories:CategoryGetWithProducts[]
}

export const TopBar: React.FC<Props> = ({ categories,className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories items={categories}/>
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;
