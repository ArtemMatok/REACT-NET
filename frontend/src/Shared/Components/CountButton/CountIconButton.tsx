import { cn } from "@/ui/ui";
import React from "react";
import { CountIconButton} from "../index/index";

export interface CountButtonProps {
  className?: string;
  value?: number;
  size?: "sm" | "lg";
  onClick?: (type: "plus" | "minus") => void;
}

export const CountButton: React.FC<CountButtonProps> = ({
  onClick,
  value,
  size,
  className,
}) => {
  return (
  <div className={cn("inline-flex items-center justify-between gap-3", className)}>
    <CountIconButton 
        onClick={() => onClick?.("minus")}
        disabled={value === 1}
        size ={size}
        type="minus"
    />

    <b className={size === "sm" ? "text-sm" : "text-md"}>{value}</b>

    <CountIconButton
      onClick={()=>onClick?.("plus")}
      size={size}
      type="plus"
    />
  </div>

  )
};

export default CountButton;
