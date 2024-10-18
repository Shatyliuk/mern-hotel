import { z } from "zod";

export const registerUserSchema = z.object({
  firstName: z
    .string({ message: "First name is required" })
    .trim()
    .min(1, { message: "Required" }),
  lastName: z
    .string({ message: "Last name is required" })
    .trim()
    .min(1, { message: "Required" }),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid Email" })
    .trim()
    .min(1, { message: "Required" }),
  password: z
    .string({ message: "Password is required" })
    .min(8, { message: "Password should have more that 8 symbols" })
    .trim()
    .min(1, { message: "Required" }),
});
