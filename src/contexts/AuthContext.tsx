// AuthContext.tsx
import React, { createContext, useState } from "react";

interface AuthContextType {
  onLogin: (email: string, password: string) => void;
}

const initialContext: AuthContextType = {
  onLogin: (email: string, password: string) => {},
};

export const AuthContext = createContext<AuthContextType>(initialContext);

export const AuthProvider: React.FC = ({ children }: any) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    console.log(`Login attempt with Email: ${email} and Password: ${password}`);
    setLoggedIn(true);
  };

  const contextValue: AuthContextType = {
    onLogin: handleLogin,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
