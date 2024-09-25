import React from "react";
import { CheckoutItemsDetails, WhiteBlock } from "../index";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button } from "@/ui/components/ui";
import { calcTaxOrder, calcTotalAmountOrder } from "@/lib";

interface Props {
    totalAmount:number;
  className?: string;
}

export const CheckOutSideBar: React.FC<Props> = ({ totalAmount,className }) => {
    const tax = calcTaxOrder(totalAmount);
    const totalAmountOrder = calcTotalAmountOrder(totalAmount);
  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Total Amount:</span>
        <span className="text-[34px] font-extrabold">
           ${totalAmount > 0 ? totalAmountOrder : 0}
        </span>
      </div>

      <CheckoutItemsDetails
        title={
          <div className="flex items-center">
            <Package size={18} className="mr-2 text-gray-300" />
            Costs of Goods
          </div>
        }
        value={String(totalAmount)}
      />
      <CheckoutItemsDetails
        title={
          <div className="flex items-center">
            <Percent size={18} className="mr-2 text-gray-300" />
            Taxes
          </div>
        }
        value={String(tax)}
      />
      <CheckoutItemsDetails
        title={
          <div className="flex items-center">
            <Truck size={18} className="mr-2 text-gray-300" />
            Delivery
          </div>
        }
        value={totalAmountOrder > 0 ? String(0) : String(2)}
      />

      <Button
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Go to payment
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};

export default CheckOutSideBar;
