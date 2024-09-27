import React from "react";
import { WhiteBlock } from "../index";
import { Input, Textarea } from "@/ui/components/ui";

interface Props {
  className?: string;
}

export const CheckoutAddress: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Address">
      <div className="flex flex-col gap-3">
        <Input name="address" className="text-base" placeholder="Address" />
        <Textarea
          rows={5}
          className="text-base"
          placeholder="Comment to order"
        />
      </div>
    </WhiteBlock>
  );
};

export default CheckoutAddress;
