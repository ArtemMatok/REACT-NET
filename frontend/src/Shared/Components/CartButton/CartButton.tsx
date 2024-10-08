import { Button } from "@/ui/components/ui";
import { cn } from "@/ui/ui";
import { ArrowRight, ShoppingCart } from "lucide-react";
import React from "react";
import { CardDrawer } from "../index";
import { useCartState } from "@/Shared/Store/Cart";

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const[totalAmount, loading, countCartItem] = useCartState((state) => [state.totalAmount, state.loading, state.cartItems.length]);
  return (
    <CardDrawer>
      <Button loading= {loading} className={cn("group relative",{'w-[105px]': loading} , className)}>
        <b>${totalAmount}</b>
        <span className="h-full w-[1px] bg-white/30 mx-3"></span>
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
          <b>{countCartItem}</b>
        </div>
        <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
      </Button>
    </CardDrawer>
  );
};

export default CartButton;
