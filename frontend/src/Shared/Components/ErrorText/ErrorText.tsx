import { cn } from '@/ui/ui';
import React from 'react';

interface Props {
    text:string;
  className?: string;
}

export const ErrorText: React.FC<Props> = ({ text,className }) => {
  return (
    <p className={cn("text-red-500 text-sm mt-2",className)}>{text}</p>
  );
};

export default ErrorText;