import React from "react";
import { FormInput, WhiteBlock } from "../index";
import FormTextArea from "../form-conponents/FormTextArea";


interface Props {
  className?: string;
}

export const CheckoutAddress: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock className={className} title="3. Address">
      <div className="flex flex-col gap-3">
        <FormInput name="address" className="text-base" placeholder="Address" />
        <FormTextArea name={"comment"} className="text-base" placeholder="Comment"  />
      </div>
    </WhiteBlock>
  );
};

export default CheckoutAddress;
