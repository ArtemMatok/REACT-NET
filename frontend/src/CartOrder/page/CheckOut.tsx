import {
  calcTaxOrder,
  calcTotalAmountOrder,
  getCartDetails,
  getCartItemDetails,
} from "@/lib";
import {
  CheckOutItem,
  CheckoutItemsDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/Shared/Components/index";
import { PizzaSize, PizzaType } from "@/Shared/Constants/pizza";
import { useCart } from "@/Shared/Hooks";
import { Button, Input, Textarea } from "@/ui/components/ui";
import Cookies from "js-cookie";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";


type Props = {};

const CheckOut = (props: Props) => {
  const { totalAmount, updateItemQuantity, cartItems, removeCartItem } =
    useCart();
  const tax = calcTaxOrder(totalAmount);
  const totalAmountOrder = calcTotalAmountOrder(totalAmount);
  const token = Cookies.get("cartToken");


  const onClickCountButton = (
    cartItemId: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    if (token) {
      updateItemQuantity(token, cartItemId, newQuantity);
    }
  };

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
              {cartItems.map((item) => (
                <CheckOutItem
                  key={item.cartItemId}
                  id={item.cartItemId}
                  details={
                    item.size && item.pizzaType
                      ? getCartItemDetails(
                          item.pizzaType as PizzaType,
                          item.size as PizzaSize,
                          item.ingredients
                        )
                      : ""
                  }
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onClickCountButton={(type) => onClickCountButton(item.cartItemId,item.quantity,type)}
                  onClickRemove={() => removeCartItem(token!, item.cartItemId)}
                />
              ))}
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
              <span className="text-[34px] font-extrabold">
              {`${totalAmountOrder}`}
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
              value={String(2)}
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
