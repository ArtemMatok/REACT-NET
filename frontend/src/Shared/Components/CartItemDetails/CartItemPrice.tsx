import { cn } from '@/ui/ui';
import React from 'react';

interface Props {
  className?: string;
  value:number;
}

export const CartItemPrice: React.FC<Props> = ({ value,className }) => {
  return (
    <h2 className={cn("font-bold", className)}>${value}</h2>
  );
};

export default CartItemPrice;