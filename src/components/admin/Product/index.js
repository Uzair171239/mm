import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import columns from "./column";
// import data from "./data";
import { TiPlus } from "react-icons/ti";
import Form from "./Form";

const Product = () => {
  const [formshow, setFormshow] = useState(false);
  const [dataTable, setDataTable] = useState({});
  const [data, setData] = useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3001/products/true').then(res=>{setData(res.data)}).catch(err=>alert(err.message))
  }, [])

  const options = {
    selectableRows: "none",

    rowsPerPage: 10,
    onRowClick: (rowData) => {
      setDataTable(data.find((d) => d.id === rowData[0]));
      setFormshow(!formshow);
    },
  };
  return (
    <div className="flex ">
      {/* crud operation form */}
      {formshow && (
        <div className=" flex w-full h-screen pb-3 absolute justify-center pt-2 backdrop-blur-sm  bg-white/5 custom_class_zindex">
          <Form setFormshow={setFormshow} dataTable={dataTable} />
        </div>
      )}

      {/* side bar  */}
      <div className="sticky top-0 left-0 w-1/5 bg-white shadow-md shadow-gray-400 h-screen">
        <Sidebar />
      </div>
      {/* main content */}
      <div className="flex-1 ">
        <Header title="products" />
        <div className="p-5 pr-4">
          <div className="flex justify-end mb-5">
            <button
              onClick={() => {
                setFormshow(!formshow);
                setDataTable({});
              }}
              className="flex items-center shadow-lg bg-green-500 font-semibold font-mono text-lg text-white p-2 rounded-sm"
            >
              <TiPlus className="w-5 h-5 " />
              Add New Product
            </button>
          </div>
          <MUIDataTable
            title={"Product List"}
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
