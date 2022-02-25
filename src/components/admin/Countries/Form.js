import { Formik } from "formik";
import React from "react";

import { CgClose } from "react-icons/cg";

function Form({ setFormshow, dataTable }) {
  const { country, country_code, currency_symbol } = dataTable;
  return (
    <div className="bg-gray-700 z-50 rounded-sm py-2  h-fit w-fit px-4 pb-4 shadow-lg shadow-gray-600 text-white">
      <div className="flex justify-end pt-2 ">
        <CgClose
          className="cursor-pointer w-6 h-6"
          onClick={() => setFormshow(false)}
        />
      </div>
      <h1 className="text-center -mt-3 text-lg">Add / Edit Country</h1>

      <Formik
        initialValues={{
          country_name: country ? country : "",
          country_code: country_code ? country_code : "",
          currency_symbol: currency_symbol ? currency_symbol : "",
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col space-y-4 pt-5">
              <div className="flex flex-col">
                <label className="text-white">Country Name</label>
                <input
                  type="text"
                  name="title"
                  value={props.values.country_name}
                  onChange={props.handleChange("country_name")}
                  placeholder="Country Name"
                  onBlur={props.handleBlur("country_name")}
                  className="w-96 p-2 rounded-sm  bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">Country Code</label>
                <input
                  type="text"
                  name="color"
                  value={props.values.country_code}
                  onChange={props.handleChange("country_code")}
                  onBlur={props.handleBlur("country_code")}
                  placeholder="Country Code"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">Currency Symbol</label>
                <input
                  type="text"
                  name="color"
                  value={props.values.currency_symbol}
                  onChange={props.handleChange("currency_symbol")}
                  onBlur={props.handleBlur("  currency_symbol")}
                  placeholder="Currency Symbol"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex justify-end space-x-3 py-4">
                <button
                  onClick={() => setFormshow(false)}
                  className="bg-inherit border border-gray-200  active:animate-ping transition ease-linear duration-100 text-white p-1 px-5 rounded-sm"
                >
                  CLOSE
                </button>
                <button
                  type="submit"
                  onClick={props.handleSubmit}
                  className="bg-inherit border border-gray-200 text-white p-1 px-5 rounded-sm"
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
