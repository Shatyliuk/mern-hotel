import { useValidateToken } from "@/hooks/useValidateToken";
import { createContext, useContext } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
};

const AuthContext = createContext<AuthContextType>({ isLoggedIn: false });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isError, isFetched, data } = useValidateToken();

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isFetched && !isError && !data.message }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
