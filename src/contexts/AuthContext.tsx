import { createContext, useContext, ReactNode, useReducer } from "react";
import { AuthContextType } from "../utilies/type/Types";
import { AuthReducer } from "../reducer/AuthReducer";
import { AUTH_ERRO_MESSAGE } from "../constants/constants";

interface AuthContextProp {
  children: ReactNode;
}

const initialAuthContextValue: AuthContextType = {
  isAuthenticated: false,
  hasPartialAccess: false,
  dispatch: () => {},
};

const AuthContext = createContext<AuthContextType>(initialAuthContextValue);

export const AuthProvider = ({ children }: AuthContextProp) => {
  const [authState, dispatch] = useReducer(
    AuthReducer,
    initialAuthContextValue
  );
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        hasPartialAccess: authState.hasPartialAccess,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(AUTH_ERRO_MESSAGE);
  }
  return context;
};
