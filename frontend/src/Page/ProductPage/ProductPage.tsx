import React from 'react';
import { useParams } from 'react-router';

interface Props {
  className?: string;
}

export const ProductPage: React.FC<Props> = ({ className }) => {
  let{id} = useParams<string>()
  return (
    <div className={className}>Product {id}</div>
  );
};

export default ProductPage;