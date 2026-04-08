import React from "react";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
