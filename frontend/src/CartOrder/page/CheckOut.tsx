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
import { CheckoutFormValues } from "@/Shared/Components/Schemas/checkoutFormSchema";
import { OrderDto } from "@/Shared/Models/Order";
import toast from "react-hot-toast";
import { useState } from "react";

type Props = {};

const CheckOut = (props: Props) => {
  const {
    totalAmount,
    updateItemQuantity,
    cartItems,
    removeCartItem,
    loading,
  } = useCart();
  const [submitting, setSubmitting] = useState<boolean>(false);

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

  const onSubmit = (data: CheckoutFormValues) => {
    try {
      setSubmitting(true);
      const order: OrderDto = {
        person: data,
        tokenCart: token!,
      };
      localStorage.setItem("preOrder", JSON.stringify(order));
      toast.success("Order was created");
      setSubmitting(false);

    } catch (error) {
      toast.error("Failed to create order");
      setSubmitting(false);
    }
  };

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
                loading={loading}
                cartItems={cartItems}
                cartToken={token!}
                removeCartItem={removeCartItem}
                onClickCountButton={onClickCountButton}
              />

              <CheckoutPersonalInform
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />

              <CheckoutAddress
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />
            </div>

            {/* Right side */}
            <div className="w-[450px]">
              <CheckOutSideBar totalAmount={totalAmount} loading={loading || submitting} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
};

export default CheckOut;
