import React from "react";
import { CheckoutItemsDetails, WhiteBlock } from "../index";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import { Button, Skeleton } from "@/ui/components/ui";
import { calcTaxOrder, calcTotalAmountOrder } from "@/lib";

interface Props {
  totalAmount: number;
  className?: string;
  loading?: boolean;
}

export const CheckOutSideBar: React.FC<Props> = ({
  loading,
  totalAmount,
  className,
}) => {
  const tax = calcTaxOrder(totalAmount);
  const deliveryPrice = 2;
  const totalPriceWithTax = calcTotalAmountOrder(totalAmount);
  const totalAmountOrder =
    totalPriceWithTax == 0 ? 0 : totalPriceWithTax + deliveryPrice;

  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Total Amount:</span>

        {loading ? (
          <Skeleton className="h-11 w-44" />
        ) : (
          <span className="h-11 text-[34px] font-extrabold">
            ${totalAmountOrder}
          </span>
        )}
      </div>

      <CheckoutItemsDetails
        title={
          <div className="flex items-center">
            <Package size={18} className="mr-2 text-gray-300" />
            Costs of Goods
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-[6px] rounded-[6px]" />
          ) : (
            `$${totalAmount}`
          )
        }
      />
      <CheckoutItemsDetails
        title={
          <div className="flex items-center">
            <Percent size={18} className="mr-2 text-gray-300" />
            Taxes
          </div>
        }
        value={
          loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `$${tax}`
        }
      />
      <CheckoutItemsDetails
        title={
          <div className="flex items-center">
            <Truck size={18} className="mr-2 text-gray-300" />
            Delivery
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-16 rounded-[6px]" />
          ) : (
            `$${totalPriceWithTax == 0 ? 0 : 2}`
          )
        }
      />

      <Button
        loading={loading}
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
