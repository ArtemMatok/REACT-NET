import {
  CheckOutItem,
  CheckoutItemsDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/Shared/Components/index";
import { Button, Input, Textarea } from "@/ui/components/ui";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";
import React from "react";

type Props = {};

const CheckOut = (props: Props) => {
  return (
    <Container className="mt-10">
      <Title
        text="Making Order"
        className="font-extrabold mb-8 text-[36px]"
      ></Title>

      <div className="flex gap-10">
        {/* Left side */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">
            <div className="flex flex-col gap-5">
              <CheckOutItem
                id={1002}
                details={
                  "Pizza, yummy loremskjdn fskjdfksjd bfkjs dfkj shdkfj shkdfj skdj fks dfks dfk sjdbkfj sbdkfj bskdj bf ksjd bfksjb dfkj bskdjf bskjd bfksj bdfksbdkfj bskdbfkjskbdfkjsbfjsbdkffjbskdf skd bsk bdfks bdkjf bskdbfkjsd"
                }
                imageUrl={
                  "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"
                }
                name={"Pizza"}
                price={10}
                quantity={1}
              />
              <CheckOutItem
                id={1002}
                details={
                  "Pizza, yummy loremskjdn fskjdfksjd bfkjs dfkj shdkfj shkdfj skdj fks dfks dfk sjdbkfj sbdkfj bskdj bf ksjd bfksjb dfkj bskdjf bskjd bfksj bdfksbdkfj bskdbfkjskbdfkjsbfjsbdkffjbskdf skd bsk bdfks bdkjf bskdbfkjsd"
                }
                imageUrl={
                  "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"
                }
                name={"Pizza"}
                price={10}
                quantity={1}
              />
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Personal info">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Name"
              />
              <Input
                name="secondName"
                className="text-base"
                placeholder="Second Name"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input
                name="phone"
                className="text-base"
                placeholder="Phone Number"
              />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Address">
            <div className="flex flex-col gap-3">
              <Input
                name="address"
                className="text-base"
                placeholder="Address"
              />
              <Textarea
                rows={5}
                className="text-base"
                placeholder="Comment to order"
              />
            </div>
          </WhiteBlock>
        </div>

        {/* Right side */}
        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Total Amount:</span>
              <span className="text-[34px] font-extrabold">$25</span>
            </div>

            <CheckoutItemsDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-300" />
                  Costs of Goods
                </div>
              }
              value="20"
            />
            <CheckoutItemsDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-300" />
                  Taxes
                </div>
              }
              value="3"
            />
            <CheckoutItemsDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-300" />
                  Delivery
                </div>
              }
              value="2"
            />

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
              Go to payment
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
};

export default CheckOut;
