import React from "react";
import RequiredSymbol from "../RequiredSymbol/RequiredSymbol";
import { Input } from "@/ui/components/ui";
import { ClearButton, ErrorText } from "../index";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  name,
  label,
  required,
  className,
  ...props
}) => {

    
  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...props}/>
        
        <ClearButton />
      </div>

      <ErrorText text="Filed is required" className="mt-2"/>

    </div>
);
};

export default FormInput;
