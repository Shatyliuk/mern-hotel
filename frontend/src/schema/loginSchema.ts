import { z } from "zod";

export const loginUserSchema = z.object({
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
