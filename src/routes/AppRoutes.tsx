import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";
import ProfilePage from "../pages/ProfilePage";
import WishlistPage from "../pages/WishlistPage";
import ContentLayout from "../layouts/ContentLayout";

function AppRoutes() {
  const handleLogin = (email: string, password: string) => {
    console.log(`Login attempt with Email: ${email} and Password: ${password}`);
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout onLogin={handleLogin} />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="products/*" element={<ContentLayout />}>
          <Route index element={<ProductsPage />} />
        </Route>
        <Route path="cart" element={<ContentLayout />}>
          <Route index element={<CartPage />} />
        </Route>
        <Route path="wishlist" element={<ContentLayout />}>
          <Route index element={<WishlistPage />} />
        </Route>
        <Route path="profile" element={<ContentLayout />}>
          <Route index element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
