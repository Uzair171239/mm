import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { GoSettings } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import Form from "./Form";

const Settings = () => {
  const [formshow, setFormshow] = useState(false);
  const [dataTable, setDataTable] = useState({});
  const data = [
    {
      id: 1,
      delivery: 1,
      mobile_discount: 5,
      new_status: 5,
      dispatch_status: 5145,
      track_status: 848,
    },
  ];
  const rowClick = (id) => {
    setDataTable(data.find((data) => data.id === id));
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
      <div className="w-1/5 bg-white shadow-md shadow-gray-400 h-screen">
        <Sidebar />
      </div>
      {/* main content */}
      <div className="flex-1">
        <Header title="settings" />

        <div className="rounded-md shadow-lg m-5 bg-white p-5 border border-gray-200">
          <div className="flex items-center space-x-2 text-lg font-semibold">
            <GoSettings className="text-gray-700 text-2xl" />
            <p>Settings</p>
          </div>
          <div className="py-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  {Object.keys(data[0]).map((d) => {
                    return (
                      <th className="px-4 py-2 text-sm font-semibold">
                        {d.toUpperCase()}
                      </th>
                    );
                  })}
                  <th className="px-4 py-2 text-sm font-semibold">ACTION</th>
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
                          {d.delivery}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.mobile_discount}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.new_status}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.dispatch_status}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.track_status}
                        </p>
                      </td>

                      <td className="px-4 py-2">
                        <button
                          onClick={(e) => rowClick(d.id)}
                          className="mx-auto rounded-sm bg-red-500 p-2 py-1 text-white flex items-center"
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

export default Settings;
