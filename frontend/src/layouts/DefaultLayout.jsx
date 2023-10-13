import React from "react";
import HeaderComp from "../components/HeaderComp";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "../style";

const DefaultLayout = () => {
  return (
    <div className="w-full min-h-[100vh] bg-containerGradient">
      <HeaderComp />
      <div className={`flex ${styles.paddingX}`}>
        <Sidebar />
        <div className="flex-1 ">
          <div className="py-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
