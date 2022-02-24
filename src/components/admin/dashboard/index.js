import React from "react";
import DComp from "./Dcomp";
import Sidebar from "../Sidebar";
import Header from "../Header";

const Dashboard = () => {
  return (
    <div className="flex ">
      {/* side bar  */}
      <div className="w-1/5 bg-white shadow-md shadow-gray-400 h-screen">
        <Sidebar />
      </div>
      {/* main content */}
      <div className="flex-1">
        <Header />
        <DComp />
      </div>
    </div>
  );
};

export default Dashboard;
