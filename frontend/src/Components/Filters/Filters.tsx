import React from 'react';
import { Title, FilterCheckbox, RangeSlider, CheckboxFiltersGroup } from '../index';
import { Input } from '@/ui/components/ui';
import { useFilterIngredients } from '@/Hooks/useFilterIngredients';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    const {ingredients, loading} = useFilterIngredients();
    const items = ingredients.map((ingredient) => (
        {
            value:String(ingredient.ingredientId),
            text:ingredient.name
        }
    ))
    

  return (
    <div className={className}>
        <Title text='Filtration' size='sm' className='mb-5 font-bold'/>

        {/* Up checkbox */}
        <div className='flex flex-col gap-4'>
            <FilterCheckbox text="Make by yourself" value="1"/>
            <FilterCheckbox text="New" value="2"/>
        </div>
        
        {/* Filter of price  */}
        <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
            <p className='font-bold mb-3'>Price from and to:</p>
            <div className='flex gap-3 mb-5'>
                <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0}/>
                <Input type='number' placeholder='0' min={100} max={1000} />
            </div>

            <RangeSlider min={0} max={1000} step={10} value={[0,1000]} />
        </div>

        <CheckboxFiltersGroup 
            title={"Ingredients"}
            className='mt-5'
            limit={6}
            defaultItems={items.slice(0,6)}
            items={items}
            loading = {loading}
        />
    </div>
  );
};

export default Filters;