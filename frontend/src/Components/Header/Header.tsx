import { cn } from '@/ui/ui';
import React from 'react';
import { Container } from '../index';
import photo from "@/images/logo.png"

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => (
    <div className={cn('border border-b', className)}>
        <Container className='flex items-center justify-between py-8'>
            {/* Left side */}
            <div>
                <img src={photo} width={35} height={35} />
                <div>
                    <h1 className='text-2xl uppercase font-black'>Pizza</h1>
                    <p className='text-sm text-gray-400 leading-3'>YUMMY</p>
                </div>
            </div>
        </Container>
    </div>
);

export default Header;