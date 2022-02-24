import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MUIDataTable from "mui-datatables";
import columns from "./column";
import data from "./data";
import { TiPlus } from "react-icons/ti";

const Product = () => {
  const options = {
    selectableRows: "none",
    responsive: "scroll",
    rowsPerPage: 5,
  };
  return (
    <div className="flex ">
      {/* side bar  */}
      <div className="w-1/5 bg-white shadow-md shadow-gray-400 h-screen">
        <Sidebar />
      </div>
      {/* main content */}
      <div className="flex-1 ">
        <Header />
        <div className="p-5 pr-4">
          <div className="flex justify-end mb-5">
            <button className="flex items-center shadow-lg bg-green-500 font-semibold font-mono text-lg text-white p-2 rounded-sm">
              <TiPlus className="w-5 h-5 " />
              Add New Product
            </button>
          </div>
          <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
            className="mui-data-table"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
