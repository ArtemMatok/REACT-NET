import React from 'react';

interface Props {
  className?: string;
}

export const ProductPage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}></div>
  );
};

export default ProductPage;