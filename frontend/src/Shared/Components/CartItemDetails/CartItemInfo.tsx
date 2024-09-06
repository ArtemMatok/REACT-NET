import { mapPizzaType, PizzaSize, PizzaType } from '@/Shared/Constants/pizza';
import { IngredientForProducts } from '@/Shared/Models/Ingredient';
import React from 'react';

interface Props {
  className?: string;
  name:string;
  details:string;
}

export const CartItemInfo: React.FC<Props> = ({ name,details,className }) => {

  return (
    <div className={className}>
        <div className='flex items-center justify-between'>
            <h2 className='text-lg font-bold flex-1 leading-6'>{name}</h2>
        </div>
        {details.length > 0 && <p className='text-xs text-gray-400'>{details}</p>}
    </div>
  );
};

export default CartItemInfo;