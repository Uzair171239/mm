import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

import MUIDataTable from "mui-datatables";
import columns from "./column";
import data from "./data";
import { TiPlus } from "react-icons/ti";

import Form from "./Form";

const Order = () => {
  const [formshow, setFormshow] = useState(false);
  const [dataTable, setDataTable] = useState({});
  const options = {
    selectableRows: "none",
    responsive: "scroll",
    rowsPerPage: 10,
    onRowClick: (rowData) => {
      setDataTable(data.find((data) => data.order_id === rowData[0]));
      setFormshow(!formshow);
    },
  };

  return (
    <div className="flex ">
      {/* crud operation form */}
      {formshow ? (
        <div className=" flex w-full h-screen absolute justify-center pt-20 backdrop-blur-sm  bg-white/5 custom_class_zindex">
          <Form setFormshow={setFormshow} dataTable={dataTable} />
        </div>
      ) : (
        ""
      )}
      {/* side bar  */}
      <div className="w-1/5 bg-white shadow-md shadow-gray-400 h-screen">
        <Sidebar />
      </div>
      {/* main content */}
      <div className="flex-1">
        <Header title="orders" />
        <div className="p-5 pr-4">
          <div className="flex justify-end mb-5">
            <button
              onClick={() => {
                setDataTable({});
                setFormshow(!formshow);
              }}
              className="flex items-center shadow-lg bg-green-500 font-semibold font-mono text-lg text-white p-2 rounded-sm"
            >
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

export default Order;
