import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full h-full flex">
      <Outlet />
    </div>
  );
};

export default MainLayout;
