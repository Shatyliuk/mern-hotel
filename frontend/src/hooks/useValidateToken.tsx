import { useQuery } from "react-query";

const getValidationToken = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL ?? ""}/api/auth/validate-token`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  const data = await response.json();

  return data;
};

export const useValidateToken = () => {
  return useQuery("validateToken", { queryFn: getValidationToken, retry: 0 });
};
