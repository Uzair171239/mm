import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { MdContactMail } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";

const ContactUs = () => {
  const data = [
    1,
    "A-Shop Oman Muscat, Sultanate Of Oman",
    "facebook.com/ashop02",
    "AShop",
    "info@ashop-oman.com",
    "+9697563736",
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
                  <th className="px-4 py-2 text-sm">ID</th>
                  <th className="px-4 py-2 text-sm">ADDRESS</th>
                  <th className="px-4 py-2 text-sm">FACEBOOK</th>
                  <th className="px-4 py-2 text-sm">INSTAGRAM</th>
                  <th className="px-4 py-2 text-sm">Email</th>
                  <th className="px-4 py-2 text-sm">WHATSAPP</th>
                  <th className="px-4 py-2 text-sm">ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-gray-200">
                  {data.map((d) => {
                    return (
                      <td className="px-4 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d}
                        </p>
                      </td>
                    );
                  })}
                  <td className="px-4 py-2 text-center">
                    <button className="rounded-sm bg-red-500 p-2 py-1 text-white flex items-center">
                      <FaRegEdit className="mx-auto" />
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
