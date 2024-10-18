import z from "zod";
import { useMutation } from "react-query";
import { loginUserSchema } from "@/schema/loginSchema";

const login = async (formData: z.infer<typeof loginUserSchema>) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL ?? ""}/api/auth/login`,
    {
      body: JSON.stringify(formData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  const data = await response.json();

  return data;
};

export const useLogin = ({
  onError,
  onSuccess,
}: {
  onError?: (error: { message: string }) => void;
  onSuccess?: (data: { message: string }) => void;
}) => {
  return useMutation({
    mutationFn: (data: z.infer<typeof loginUserSchema>) => login(data),
    onError,
    onSuccess,
  });
};
