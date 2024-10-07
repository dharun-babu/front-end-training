import { createContext, useState, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { UserData } from "../data/UserData";
import { AuthContextType } from "../utilies/type/Types";
import { INVALID, PRODUCTS, LOGIN } from "../constants/constants";

interface AuthContextProp {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthContextProp) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasPartialAccess, setHasPartialAccess] = useState(false);
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    const user = UserData.find(
      (user: any) => user.email === email && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      setHasPartialAccess(false);
      navigate(PRODUCTS);
    } else {
      alert(INVALID);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setHasPartialAccess(false);
    navigate(LOGIN);
  };

  const setPartialAccess = () => {
    setIsAuthenticated(false);
    setHasPartialAccess(true);
    navigate(PRODUCTS);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        hasPartialAccess,
        login,
        logout,
        setPartialAccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
