import React from "react";
import { Outlet } from "react-router-dom";
interface MainLayoutProps {
  onLogin: (email: string, password: string) => void;
}
const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <>
    <div className="w-full h-full bg-red-500">
      <Outlet/>
    </div>
		</>
  );
};

export default MainLayout;
