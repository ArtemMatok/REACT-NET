import { Dialog, DialogContent, Title } from "@radix-ui/react-dialog";
import React from "react";

import { ProductGetWithIngredientsWithItems } from "@/Models/Product";
import { cn } from "@/ui/ui";

interface Props {
  className?: string;
  product?: ProductGetWithIngredientsWithItems;
}

export const ChooseProductModal: React.FC<Props> = ({product, className }) => {
  return (
    <Dialog>
      <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",className)}>
        <Title>{product?.name}</Title>
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModal;
