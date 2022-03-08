import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

import MUIDataTable from "mui-datatables";
import columns from "./column";
// import data from "./data";
import axios from "axios";
import { TiPlus } from "react-icons/ti";

import Form from "./Form";

const Order = () => {
  const [formshow, setFormshow] = useState(false);
  const [data, setData] = useState([]);
  const [dataTable, setDataTable] = useState({});

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/orders")
      .then((res) => setData(res.data))
      .catch((err) => alert(err.message));
  }, []);
  const options = {
    selectableRows: "none",

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
      <div className="sticky top-0 left-0 w-1/5 bg-white shadow-md shadow-gray-400 h-screen">
        <Sidebar />
      </div>
      {/* main content */}
      <div className="flex-1">
        <Header title="orders" />
        <div className="p-5 pr-4">
          <MUIDataTable
            title={"Orders List"}
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
