import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Status = () => {
  const data = [
    {
      id: 1,
      title: "New",
      description: "When order is created",
      created_on: "25/10/2021",
    },
    {
      id: 2,
      title: "Cancelled",
      description: "Cancelled orders",
      created_on: "31/10/2021",
    },
    {
      id: 3,
      title: "Delivered",
      description: "When item is delivered",
      created_on: "25/10/2021",
    },
  ];
  return (
    <div className="flex ">
      {/* side bar  */}
      <div className="w-1/5 bg-white shadow-md shadow-gray-400 h-screen">
        <Sidebar />
      </div>
      {/* main content */}
      <div className="flex-1">
        <Header />
        <div className="rounded-md shadow-lg m-5 bg-white p-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MdContactMail className="text-gray-700 text-xl" />
              <p className="text-lg font-semibold font-mono text-gray-700">
                Contact
              </p>
            </div>
            <div>
              <button className="flex items-center bg-green-500 font-semibold font-mono text-lg text-white p-2 rounded-sm">
                <TiPlus className="w-5 h-5 " />
                New Contact
              </button>
            </div>
          </div>
          <div className="py-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  {Object.keys(data[0]).map((d) => {
                    return (
                      <th className="px-4 py-2 text-sm">{d.toUpperCase()}</th>
                    );
                  })}
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
                          {d.title}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.description}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.created_on}
                        </p>
                      </td>
                      <td className="px-4 py-2">
                        <button className="mx-auto rounded-sm bg-red-500 p-2 py-1 text-white flex items-center">
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

export default Status;
