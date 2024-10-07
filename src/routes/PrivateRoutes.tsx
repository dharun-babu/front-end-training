import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { LOGIN, REQUEST_FOR_LOGIN } from "../constants/constants";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    alert(REQUEST_FOR_LOGIN);
    return <Navigate to={LOGIN} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;
