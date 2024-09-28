import {z} from "zod";

export const checkoutFormSchema = z.object({
    firstName:z.string().min(2,{message:"The name must containe more than 2 symbols"}),
    lastName:z.string().min(2,{message:"The second name must containe more than 2 symbols"}),
    email:z.string().email({message:"Write correct email"}),
    phone:z.string().min(10,{message:"Write correct number"}),
    address:z.string().min(5,{message:"Write correct address"}),
    comment:z.string().optional(),
})

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;