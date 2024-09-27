import { getCartItemDetails } from "@/lib";
import {
  CheckoutAddress,
  CheckoutCart,
  CheckOutItem,
  CheckoutPersonalInform,
  CheckOutSideBar,
  Container,
  FormInput,
  Title,
  WhiteBlock,
} from "@/Shared/Components/index";
import { PizzaSize, PizzaType } from "@/Shared/Constants/pizza";
import { useCart } from "@/Shared/Hooks";
import { Input, Textarea } from "@/ui/components/ui";
import Cookies from "js-cookie";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

const CheckOut = (props: Props) => {
  const { totalAmount, updateItemQuantity, cartItems, removeCartItem } =
    useCart();

  // const form = useForm({
  //   resolver: zodResolver(),
  //   defaultValues: {
  //     email: "",
  //     firstName: "",
  //     lastName: "",
  //     phone: "",
  //     address: "",
  //     comment: "",
  //   },
  // });

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
          <CheckoutCart
            cartItems={cartItems}
            cartToken={token!}
            removeCartItem={removeCartItem}
            onClickCountButton={onClickCountButton}
          />

          <CheckoutPersonalInform />

          <CheckoutAddress />
        </div>

        {/* Right side */}
        <div className="w-[450px]">
          <CheckOutSideBar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
};

export default CheckOut;
