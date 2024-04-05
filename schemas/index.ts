import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(8, { message: "Minimum of 8 characters required." }),
  name: z.string().min(1, { message: "Name is required" }),
  matricNo: z
    .string()
    .min(10, { message: "Minimum of 10 characters required." }),
  telegramNo: z
    .string()
    .min(11, { message: "Minimum of 11 characters required." }),
  roomNo: z.string({ required_error: "Room No is required" }),
});
