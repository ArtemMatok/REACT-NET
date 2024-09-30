import { cn } from "@/ui/ui";
import React from "react";

interface Props {
  className?: string;
  title?: React.ReactNode;
  value?: any;
}

export const CheckoutItemsDetails: React.FC<Props> = ({
  title,
  value,
  className,
}) => {
  return (
    <div className={cn("flex my-4", className)}>
      <span className="flex flex-1 text-lg text-neutral-500">
        {title}
      </span>

      <span className="font-bold text-lg">{value}</span>
    </div>
  );
};

export default CheckoutItemsDetails;
