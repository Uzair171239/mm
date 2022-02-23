import React from "react";

import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required("Full Name is required").min(4),
  Mobile: yup.string().required("Mobile is required").min(10),
  quantity: yup.string().required("Quantity is required"),
  city: yup.string().required("City is required"),
  deliveryAddress: yup.string().required("Delivery Address is required"),
});

function Form({ product }) {
  const { price, oldPrice } = product;
  return (
    <div className="flex flex-col space-y-1 px-2 bg-white border border-gray-300 shadow-sm py-2">
      <h1 className="text-3xl font-semibold ">IVD Glucometer Set</h1>
      <p className="text-green-500 text-sm font-semibold">671 sold</p>
      <div className="flex space-x-4 py-1">
        <h2 className="font-semibold">{price} AED</h2>
        <p className="text-gray-500 line-through">{oldPrice} AED</p>
      </div>
      <Formik
        initialValues={{
          fullName: "",
          Mobile: "",
          quantity: "",
          city: "",
          deliveryAddress: "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {(props) => (
          <div className="space-y-3">
            <div className="flex flex-col ">
              <label htmlFor="fullName">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={props.handleChange("fullName")}
                value={props.values.fullName}
                placeholder="Full Name"
                className="border border-gray-300 rounded-md p-2 outline-none"
              />
              <span>{props.errors.fullName}</span>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="fullName">
                Mobile<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                onChange={props.handleChange("Mobile")}
                value={props.values.Mobile}
                placeholder="Mobile"
                className="border border-gray-300 rounded-md p-2 outline-none"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="fullName">
                Quantity<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="quantity"
                onChange={props.handleChange("quantity")}
                value={props.values.quantity}
                placeholder="-Select-"
                className="border border-gray-300 rounded-md p-2 outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="fullName">
                Emirate<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="city"
                onChange={props.handleChange("city")}
                value={props.values.city}
                placeholder="-Select-"
                className="border border-gray-300 rounded-md p-2 outline-none"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="fullName">
                Delivery Address<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                name="deliveryAddress"
                onChange={props.handleChange("deliveryAddress")}
                value={props.values.deliveryAddress}
                placeholder="Delivery Address"
                className="border border-gray-300 rounded-md p-2 outline-none"
              />
            </div>
            <button
              type="submit"
              onClick={props.handleSubmit}
              className="inline-block w-full  py-3 bg-green-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-grenn-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out "
            >
              SUBMIT ORDER
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Form;
