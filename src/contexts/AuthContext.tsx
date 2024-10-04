import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  setPartialAccess: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasPartialAccess, setHasPartialAccess] = useState(false);
  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    if (email === "xyz@gmail.com" && password === "amma@123") {
      setIsAuthenticated(true);
      setHasPartialAccess(false);
      navigate("/products"); 
    } else {
      alert("Invalid credentials!");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  const setPartialAccess = () => {
    setIsAuthenticated(false);
    setHasPartialAccess(true);
    navigate("/products");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
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
