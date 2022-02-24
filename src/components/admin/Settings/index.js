import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Settings = () => {
  return (
    <div className="flex ">
      {/* side bar  */}
      <div className="w-1/5 bg-white shadow-md shadow-gray-400 h-screen">
        <Sidebar />
      </div>
      {/* main content */}
      <div className="flex-1">
        <Header />
        <h1>Settings</h1>
      </div>
    </div>
  );
};

export default Settings;
