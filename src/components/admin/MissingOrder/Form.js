import axios from "axios";
import { Formik } from "formik";
import React from "react";

import { CgClose } from "react-icons/cg";

function Form({ setFormshow, dataTable }) {
  const { id, client_name, phone_number } = dataTable;

  return (
    <div className="bg-gray-700 z-50 rounded-md  h-fit w-fit px-4 pb-4 shadow-lg shadow-gray-600 text-white">
      <div className="flex justify-end pt-2 ">
        <CgClose
          className="cursor-pointer w-6 h-6"
          onClick={() => setFormshow(false)}
        />
      </div>
      <h1 className="text-center -mt-3 text-lg">Add / Edit Missing Order</h1>

      <Formik
        initialValues={{
          name: client_name ? client_name : "",
          mobile: phone_number ? phone_number : "",
        }}
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col space-y-3 pt-5">
              <div className="flex space-x-2">
                <div className="flex flex-col">
                  <label className="text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={props.values.name}
                    onChange={props.handleChange("name")}
                    disabled
                    placeholder="Enter Name"
                    className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={props.values.mobile}
                    disabled
                    onChange={props.handleChange("mobile")}
                    placeholder="Enter Mobile"
                    className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 py-4">
                {dataTable.id && (
                  <button
                    onClick={() => {
                      setFormshow(false);
                      axios
                        .delete("http://localhost:3001/missingorders/" + id)
                        .then((res) => {
                          window.location.reload();
                        })
                        .catch((err) => alert(err.message));
                    }}
                    className="bg-inherit border border-gray-200  active:animate-ping transition ease-linear duration-100 text-white p-1 px-5 rounded-sm"
                  >
                    DELETE
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Form;
