import z from "zod";
import { registerUserSchema } from "@/schema/registerSchema";
import { useMutation } from "react-query";

const registerUser = async (formData: z.infer<typeof registerUserSchema>) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL ?? ""}/api/users/register`,
    {
      body: JSON.stringify(formData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  return data;
};

export const useRegister = ({
  onError,
  onSuccess,
}: {
  onError?: (error: { message: string }) => void;
  onSuccess?: (data: { message: string }) => void;
}) => {
  return useMutation({
    mutationFn: (data: z.infer<typeof registerUserSchema>) =>
      registerUser(data),
    onError,
    onSuccess,
  });
};
