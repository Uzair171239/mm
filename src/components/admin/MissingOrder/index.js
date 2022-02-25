import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

import MUIDataTable from "mui-datatables";
import columns from "./column";
import data from "./data";
import Form from "./Form";

const MissingOrder = () => {
  const [formshow, setFormshow] = useState(false);
  const [dataTable, setDataTable] = useState({});
  const options = {
    selectableRows: "none",
    responsive: "scroll",
    rowsPerPage: 10,
    onRowClick: (rowData) => {
      setDataTable(data.find((data) => data.id === rowData[0]));
      setFormshow(!formshow);
    },
  };
  return (
    <div className="flex relative">
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
        <Header title="missing_order" />
        <div className="p-5 pr-4 pt-10">
          <MUIDataTable
            title={"Missing Order List"}
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

export default MissingOrder;
