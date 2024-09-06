import React from "react";
import { CountButtonProps } from "../CountButton/CountIconButton";
import { Button } from "@/ui/components/ui";
import { cn } from "@/ui/ui";
import { Minus, Plus } from "lucide-react";

interface IconButtonProps {
  className?: string;
  size?: CountButtonProps["size"];
  disabled?: boolean;
  type?: "plus" | "minus";
  onClick?: () => void;
}

export const CountIconButton: React.FC<IconButtonProps> = ({
  size,
  disabled,
  type,
  onClick,
  className,
}) => {
  return (
    <Button
      variant={"outline"}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled :text-gray-400",
        size === "sm" ? "w-[30px] h-[30px] rounded-[10px]" : "w-[30px] h-[30px] rounded-md"
      )}
    >
      {type === "plus" ? (
        <Plus className={size === "sm" ? "h-4" : "h-5"}/>
      ):(
        <Minus className={size === "sm" ? "h-4" : "h-5"}/>
      )}
    </Button>

  )
};

export default CountIconButton;
