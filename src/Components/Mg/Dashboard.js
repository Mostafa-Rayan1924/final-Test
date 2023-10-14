import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";

const Dashboard = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-4 ">
      <div className="w-full md:w-[300px] md:min-h-screen">
        <div className="hidden h-full w-full md:flex">
          <Sidebar />
        </div>
        <div className=" md:hidden ">
          <TopBar />
        </div>
      </div>
      <div className="w-full lg:w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
