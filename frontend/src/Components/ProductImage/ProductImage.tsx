import { cn } from '@/ui/ui';
import React from 'react';

interface Props {
  className?: string;
  imageUrl:string | undefined,
  size:number
}

export const ProductImage: React.FC<Props> = ({ className, imageUrl, size }) => {
  return (
    <div className={cn("flex items-center justify-center flex-1 relative w-full",className)}>
        <img
            src={imageUrl}
            alt='logo'
            className={cn("relative left-2 top-2 transition-all z-10 duration-300", {
                "w-[300px] h-[300px]":size ===30,
                "w-[400px] h-[400px]":size ===40,
                "w-[500px] h-[500px]":size ===50,
            })}
        />

        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1 border-dashed border-2 rounded-full border-gray-200 w-[370px] h-[370px]"></div>
    </div>
  );
};

export default ProductImage;