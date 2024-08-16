import React from 'react';
import { Title, FilterCheckbox, RangeSlider, CheckboxFiltersGroup } from '../index';
import { Input } from '@/ui/components/ui';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
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
            defaultItems={[
                {
                    text:"Cheese sous",
                    value:"1"
                },
                {
                    text:"Mozzarella",
                    value:"2"
                },
                {
                    text:"Garlick",
                    value:"3"
                },
                {
                    text:"Salty cucumber",
                    value:"4"
                },
                {
                    text:"Red onion",
                    value:"5"
                },
                {
                    text:"Tomatoes",
                    value:"6"
                },
            ]}
            items={[
                {
                    text:"Cheese sous",
                    value:"1"
                },
                {
                    text:"Mozzarella",
                    value:"2"
                },
                {
                    text:"Garlick",
                    value:"3"
                },
                {
                    text:"Salty cucumber",
                    value:"4"
                },
                {
                    text:"Red onion",
                    value:"5"
                },
                {
                    text:"Tomatoes",
                    value:"6"
                },
                {
                    text:"Chiken",
                    value:"7"
                },
                {
                    text:"Beef",
                    value:"8"
                },
            ]}
        />
    </div>
  );
};

export default Filters;