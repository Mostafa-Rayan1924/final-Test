import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <div className="flex gap-5 justify-between">
        <div className="hidden lg:flex">
          <Sidebar />
        </div>
        <div className="flex-1 lg:mr-[230px]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
