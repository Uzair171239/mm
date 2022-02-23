import React from "react";

import { Formik } from "formik";
import * as yup from "yup";
// import Select from "react-select";
// import countryList from "react-select-country-list";

const schema = yup.object({
  fullName: yup
    .string()
    .required("Please enter Your Full Name ")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  Mobile: yup
    .string()
    .required("Mobile Number is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  quantity: yup.string().required("Quantity is required"),
  city: yup.string().required("City is required"),
  deliveryAddress: yup
    .string()
    .required("Delivery Address is required")
    .min(12),
});

function Form({ product }) {
  const { price, oldPrice } = product;
  // const options = useMemo(() => countryList().getData(), []);
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
            <div className="flex flex-col mt-2 space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.fullName && props.errors.fullName}
                </span>
              </div>
              <input
                type="text"
                onChange={props.handleChange("fullName")}
                value={props.values.fullName}
                placeholder="Full Name"
                className="border border-gray-300 rounded-sm p-2 outline-none"
                onBlur={props.handleBlur("fullName")}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                  Mobile<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.Mobile && props.errors.Mobile}
                </span>
              </div>
              <input
                type="text"
                onChange={props.handleChange("Mobile")}
                value={props.values.Mobile}
                placeholder="Mobile"
                className="border border-gray-300 rounded-sm p-2 outline-none"
                onBlur={props.handleBlur("Mobile")}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                  Quantity<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.quantity && props.errors.quantity}
                </span>
              </div>
             <select
                name="quantity"
                onChange={props.handleChange("quantity")}
                value={props.values.quantity}
                className="border border-gray-300 rounded-sm p-2 outline-none"
                onBlur={props.handleBlur("quantity")}
              >
                <option>-Select-</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select> 
                {/*<input
                type="text"
                name="quantity"
                onChange={props.handleChange("quantity")}
                value={props.values.quantity}
                placeholder="-Select-"
                className="border border-gray-300 rounded-sm p-2 outline-none"
                onBlur={props.handleBlur("quantity")}
              />*/}
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                  Emirate<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.city && props.errors.city}
                </span>
              </div>
             {/* <Select
                options={options}
                value={props.values.city}
                onBlur={props.handleBlur("city")}
                onChange={props.handleChange("city")}
                // className="border border-gray-300 rounded-sm p-2 outline-none"
             />*/}
              <input
                type="text"
                name="city"
                onChange={props.handleChange("city")}
                value={props.values.city}
                placeholder="-Select-"
                className="border border-gray-300 rounded-sm p-2 outline-none"
                onBlur={props.handleBlur("city")}
              /> 
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                  Delivery Address<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.deliveryAddress &&
                    props.errors.deliveryAddress}
                </span>
              </div>
              <textarea
                rows={4}
                name="deliveryAddress"
                onChange={props.handleChange("deliveryAddress")}
                value={props.values.deliveryAddress}
                placeholder="Delivery Address"
                className="border border-gray-300 rounded-sm p-2 pt-1 outline-none"
                onBlur={props.handleBlur("deliveryAddress")}
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
