import { Navigate, Route, Routes } from "react-router-dom";
import {
  LOGIN,
  PRODUCTS,
  CART,
  WISHLIST,
  PROFILE,
} from "../constants/constants";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import ProfilePage from "../pages/ProfilePage";
import WishlistPage from "../pages/WishlistPage";
import ContentLayout from "../layouts/ContentLayout";
import PrivateRoute from "./PrivateRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to={LOGIN} replace />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={PRODUCTS} element={<ContentLayout />}>
          <Route index element={<ProductsPage />} />
          <Route element={<PrivateRoute />}>
            <Route path={CART} element={<CartPage />} />
            <Route path={WISHLIST} element={<WishlistPage />} />
            <Route path={PROFILE} element={<ProfilePage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
