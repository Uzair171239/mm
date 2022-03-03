import { Formik } from "formik";
import React from "react";

import { CgClose } from "react-icons/cg";

function Form({ setFormshow, dataTable }) {
  const { name, phone, address, city, title } = dataTable;

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
          name: name ? name : "",
          mobile: phone ? phone : "",
          address: address ? address : "",
          city: city ? city : "",
          product: title ? title : "",
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
                    onChange={props.handleChange("mobile")}
                    placeholder="Enter Mobile"
                    className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-white">Address</label>
                <textarea
                  rows={3}
                  name="address"
                  value={props.values.address}
                  onChange={props.handleChange("address")}
                  placeholder="Enter Address"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">City</label>
                <input
                  type="text"
                  name="city"
                  value={props.values.city}
                  onChange={props.handleChange("city")}
                  placeholder="Enter City"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">Product</label>
                <input
                  type="text"
                  name="product"
                  value={props.values.product}
                  onChange={props.handleChange("product")}
                  placeholder="Enter Product"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex justify-end space-x-3 py-4">
                {dataTable.id && (
                  <button
                    onClick={() => setFormshow(false)}
                    className="bg-inherit border border-gray-200  active:animate-ping transition ease-linear duration-100 text-white p-1 px-5 rounded-sm"
                  >
                    DELETE
                  </button>
                )}
                <button className="bg-inherit border border-gray-200 text-white p-1 px-5 rounded-sm">
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
