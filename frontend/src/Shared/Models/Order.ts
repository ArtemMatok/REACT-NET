import { CheckoutFormValues } from "../Components/Schemas/checkoutFormSchema";

export type OrderDto = {
    person:CheckoutFormValues;
    tokenCart:string;
}