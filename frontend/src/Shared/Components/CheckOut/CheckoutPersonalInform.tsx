import React from "react";
import { FormInput, WhiteBlock } from "../index";
import { Input } from "@/ui/components/ui";

interface Props {
  className?: string;
}

export const CheckoutPersonalInform: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="2. Personal info">
      <div className="grid grid-cols-2 gap-5">
        <Input name="firstName" className="text-base" placeholder="Name" />
        <Input
          name="secondName"
          className="text-base"
          placeholder="Second Name"
        />
        <Input name="email" className="text-base" placeholder="E-Mail" />
        <FormInput className="text-base" placeholder="Phone" name={"phone"} />
      </div>
    </WhiteBlock>
  );
};

export default CheckoutPersonalInform;
