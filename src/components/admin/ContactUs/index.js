import React, { useState, useEffect } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { MdContactMail } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import Form from "./Form";
import axios from "axios";

const ContactUs = () => {
  const [formshow, setFormshow] = useState(false);
  const [dataTable, setDataTable] = useState({});
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/contacts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);
  // const data = [
  //   {
  //     id: 1,
  //     country_name: "United Arab Emirates",
  //     address: "A-Shop Oman Muscat, Sultanate Of Oman",
  //     facebook: "facebook.com/ashop02",
  //     instagram: "AShop",
  //     email: "info@ashop-oman.com",
  //     whatsapp: "+971 56 567 567",
  //   },
  // ];

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
      <div className="sticky top-0 left-0 w-1/5 bg-white shadow-md shadow-gray-400 h-screen">
        <Sidebar />
      </div>
      {/* main content */}
      <div className="flex-1">
        <Header title="contact" />
        <div className="rounded-md shadow-lg m-5 mx-2 bg-white p-5 px-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MdContactMail className="text-gray-700 text-xl" />
              <p className="text-lg font-semibold font-mono text-gray-700">
                Contacts
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
                New Contact
              </button>
            </div>
          </div>
          <div className="py-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="px-1 py-2 text-sm">ID</th>
                  <th className="px-1 py-2 text-sm">ADDRESS</th>
                  <th className="px-1 py-2 text-sm">FACEBOOK</th>
                  <th className="px-1 py-2 text-sm">INSTAGRAM</th>
                  <th className="px-1 py-2 text-sm">Email</th>
                  <th className="px-1 py-2 text-sm">WHATSAPP</th>
                  <th className="px-1 py-2 text-sm">PHONE</th>
                  <th className="px-1 py-2 text-sm">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => {
                  return (
                    <tr className="border-b-2 border-gray-200">
                      <td className="px-1 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.id}
                        </p>
                      </td>
                      <td className="px-1 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.country_name}
                        </p>
                      </td>
                      <td className="px-1 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.address}
                        </p>
                      </td>
                      <td className="px-1 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.facebook}
                        </p>
                      </td>
                      <td className="px-1 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.instagram}
                        </p>
                      </td>
                      <td className="px-1 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.email}
                        </p>
                      </td>
                      <td className="px-1 py-2">
                        <p className=" font-mono text-gray-700 text-center">
                          {d.whatsapp}
                        </p>
                      </td>
                      <td className="px-1 py-2 text-center">
                        <button
                          onClick={(e) => rowClick(d.id)}
                          className="rounded-sm shadow-lg bg-red-500 p-2 py-1 text-white flex items-center"
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

export default ContactUs;
