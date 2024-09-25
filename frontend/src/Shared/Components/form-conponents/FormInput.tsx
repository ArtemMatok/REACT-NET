import React from 'react';

interface Props {}
  className?: string;
}

export const FormInput: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}></div>
  );
};

export default FormInput;