import { useMutation } from "react-query";

const logout = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL ?? ""}/api/auth/logout `,
    {
      method: "POST",
      credentials: "include",
    }
  );

  const data = await response.json();

  return data;
};

export const useLogout = ({
  onSuccess = () => {},
}: {
  onSuccess?: (data: { message: string }) => void;
}) => {
  return useMutation({
    mutationFn: () => logout(),
    onSuccess,
  });
};
