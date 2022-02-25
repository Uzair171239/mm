import { Formik } from "formik";
import React from "react";

import { CgClose } from "react-icons/cg";

function Form({ setFormshow, dataTable }) {
  console.log(dataTable);
  return (
    <div className="bg-gray-700 z-50 rounded-sm py-0  h-fit w-fit px-4 pb-0 shadow-lg shadow-gray-600 text-white">
      <div className="flex justify-end pt-2 ">
        <CgClose
          className="cursor-pointer w-6 h-6"
          onClick={() => setFormshow(false)}
        />
      </div>
      <h1 className="text-center -mt-3 text-lg">Add / Edit Products</h1>

      <Formik
        initialValues={{
          name: dataTable.full_name ? dataTable.full_name : "",
          mobile: dataTable.phone ? dataTable.phone : "",
          address: dataTable.address ? dataTable.address : "",
          city: dataTable.city ? dataTable.city : "",
          product: dataTable.title ? dataTable.title : "",
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
          setFormshow(false);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col space-y-4 pt-3">
              <div className="space-y-2 ">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      placeholder="Name"
                      onBlur={props.handleBlur("name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      value={props.values.mobile}
                      onChange={props.handleChange("mobile")}
                      onBlur={props.handleBlur("mobile")}
                      placeholder="Mobile"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      placeholder="Name"
                      onBlur={props.handleBlur("name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      value={props.values.mobile}
                      onChange={props.handleChange("mobile")}
                      onBlur={props.handleBlur("mobile")}
                      placeholder="Mobile"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      placeholder="Name"
                      onBlur={props.handleBlur("name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      value={props.values.mobile}
                      onChange={props.handleChange("mobile")}
                      onBlur={props.handleBlur("mobile")}
                      placeholder="Mobile"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      placeholder="Name"
                      onBlur={props.handleBlur("name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      value={props.values.mobile}
                      onChange={props.handleChange("mobile")}
                      onBlur={props.handleBlur("mobile")}
                      placeholder="Mobile"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      placeholder="Name"
                      onBlur={props.handleBlur("name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      value={props.values.mobile}
                      onChange={props.handleChange("mobile")}
                      onBlur={props.handleBlur("mobile")}
                      placeholder="Mobile"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      placeholder="Name"
                      onBlur={props.handleBlur("name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      value={props.values.mobile}
                      onChange={props.handleChange("mobile")}
                      onBlur={props.handleBlur("mobile")}
                      placeholder="Mobile"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      placeholder="Name"
                      onBlur={props.handleBlur("name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      value={props.values.mobile}
                      onChange={props.handleChange("mobile")}
                      onBlur={props.handleBlur("mobile")}
                      placeholder="Mobile"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      placeholder="Name"
                      onBlur={props.handleBlur("name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      value={props.values.mobile}
                      onChange={props.handleChange("mobile")}
                      onBlur={props.handleBlur("mobile")}
                      placeholder="Mobile"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      placeholder="Name"
                      onBlur={props.handleBlur("name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      value={props.values.mobile}
                      onChange={props.handleChange("mobile")}
                      onBlur={props.handleBlur("mobile")}
                      placeholder="Mobile"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      placeholder="Name"
                      onBlur={props.handleBlur("name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      value={props.values.mobile}
                      onChange={props.handleChange("mobile")}
                      onBlur={props.handleBlur("mobile")}
                      placeholder="Mobile"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 py-3">
                <button
                  onClick={() => setFormshow(false)}
                  className="bg-inherit border border-gray-200  active:animate-ping transition ease-linear duration-100 text-white p-1 px-5 rounded-sm"
                >
                  CLOSE
                </button>
                <button
                  type="submit"
                  onClick={props.handleSubmit}
                  className="bg-inherit border active:animate-spin transition ease-linear duration-100  border-gray-200 text-white p-1 px-5 rounded-sm"
                >
                  SAVE
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Form;
