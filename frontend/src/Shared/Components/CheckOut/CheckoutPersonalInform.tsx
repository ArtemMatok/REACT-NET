import React from "react";
import { FormInput, WhiteBlock } from "../index";

interface Props {
  className?: string;
}

export const CheckoutPersonalInform: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Personal info" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <FormInput name="firstName" className="text-base" placeholder="Name" />
        <FormInput
          name="lastName"
          className="text-base"
          placeholder="Second Name"
        />
        <FormInput name="email" className="text-base" placeholder="E-Mail" />
        <FormInput className="text-base" placeholder="Phone" name="phone" />
      </div>
    </WhiteBlock>
  );
};

export default CheckoutPersonalInform;
