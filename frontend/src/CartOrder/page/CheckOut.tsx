import { getCartItemDetails } from "@/lib";
import {
  CheckoutAddress,
  CheckoutCart,
  checkoutFormSchema,
  CheckoutPersonalInform,
  CheckOutSideBar,
  Container,
  Title,
} from "@/Shared/Components/index";
import { useCart } from "@/Shared/Hooks";
import Cookies from "js-cookie";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {CheckoutFormValues } from "@/Shared/Components/Schemas/checkoutFormSchema";

type Props = {};

const CheckOut = (props: Props) => {
  const { totalAmount, updateItemQuantity, cartItems, removeCartItem } =
    useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

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

  const onSubmit = (data:CheckoutFormValues) => {
    console.log(data);
  }

  return (
    <Container className="mt-10">
      <Title
        text="Making Order"
        className="font-extrabold mb-8 text-[36px]"
      ></Title>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
        </form>
      </FormProvider>
    </Container>
  );
};

export default CheckOut;
