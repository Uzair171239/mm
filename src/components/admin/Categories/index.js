import React, { useState } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Form from "./Form";

const Categories = () => {
  const [formshow, setFormshow] = useState(false);
  const [dataTable, setDataTable] = useState({});
  const [data, setData] = useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:3001/category").then((res) => setData(res.data)).catch((err) => alert(err.message));
  }, [])
  // const data = [
  //   {
  //     id: 1,
  //     category_name: "United Arab Emirates",
  //     description: "AE",
  //     created_on: "AED",
  //   },
  //   {
  //     id: 2,
  //     category_name: "Qatar",
  //     description: "QA",
  //     created_on: "QR",
  //   },
  //   {
  //     id: 3,
  //     category_name: "Oman",
  //     description: "some description here",
  //     created_on: "OMR",
  //   },
  //   {
  //     id: 4,
  //     category_name: "United Arab Emirates",
  //     description: "OM",
  //     created_on: "OMR",
  //   },
  //   {
  //     id: 5,
  //     category_name: "Oman",
  //     description: "OM",
  //     created_on: "OMR",
  //   },
  // ];

  const rowClick = (id) => {
    setDataTable(data.find((d) => d.id === id));
    setFormshow(!formshow);
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
        <Header title="categories" />
        <div className="rounded-md shadow-lg m-5 bg-white p-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MdContactMail className="text-gray-700 text-xl" />
              <p className="text-lg font-semibold font-mono text-gray-700">
                Categories
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  setFormshow(!formshow);
                  setDataTable({});
                }}
                className="flex items-center shadow-lg bg-green-500 font-semibold font-mono text-lg text-white p-2 rounded-sm"
              >
                <TiPlus className="w-5 h-5 " />
                New Category
              </button>
            </div>
          </div>
          <div className="py-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                
                  <th className="px-4 py-2 text-sm">ID</th>
                  <th className="px-4 py-2 text-sm">CATEGORY NAME</th>
                  <th className="px-4 py-2 text-sm">DESCRIPTION</th>
                  <th className="px-4 py-2 text-sm">CREATED ON</th>
                  <th className="px-4 py-2 text-sm">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => {
                  return (
                    <tr className="border-b-2 border-gray-200">
                      <td className="px-4 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.id}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.name}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.description}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.created_at}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <button
                          onClick={(e) => rowClick(d.id)}
                          className="mx-auto shadow-lg rounded-sm bg-red-500 p-2 py-1 text-white flex items-center"
                        >
                          <FaRegEdit className="mx-auto" />
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
