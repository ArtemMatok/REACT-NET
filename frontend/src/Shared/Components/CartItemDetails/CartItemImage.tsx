import { cn } from '@/ui/ui';
import React from 'react';

interface Props {
  className?: string;
  image:string;
}

export const CartItemImage: React.FC<Props> = ({ image,className }) => {
  return (
    <img className={cn("w-[60px] h-[60px]", className)} src={image}></img>
  );
};

export default CartItemImage;