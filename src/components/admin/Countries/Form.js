import React from "react";

import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { CgClose } from "react-icons/cg";

const schema = yup.object({
  country: yup.string().required("country name is required").min(3),
  country_code: yup.string().required("country code is required").min(2),
  currency: yup.string().required("currency is required"),
  with_vat: yup.string().required("with vat is required"),
  view_vat: yup.string().required("view vat is required"),
});

function Form({ setFormshow, dataTable }) {
  const { country, country_code, currency, with_vat, view_vat } = dataTable;
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
          country: country ? country : "",
          country_code: country_code ? country_code : "",
          currency: currency ? currency : "",
          with_vat: with_vat ? with_vat : "",
          view_vat: view_vat ? view_vat : "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          if (dataTable.id) {
            axios
              .patch("http://localhost:3001/countries", {
                ...values,
                id: dataTable.id,
              })
              .then((res) => {
                alert("Country Updated");
                window.location.reload();
              })
              .catch((err) => alert(err.message));
          } else {
            axios
              .post("http://localhost:3001/countries", values)
              .then((res) => {
                alert("Country Added");
                window.location.reload();
              })
              .catch((err) => alert(err.message));
          }
          actions.resetForm();
          setFormshow(false);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col space-y-4 pt-5">
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">Country Name</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.country && props.errors.country}
                  </p>
                </div>
                <input
                  type="text"
                  name="title"
                  value={props.values.country}
                  onChange={props.handleChange("country")}
                  placeholder="Enter Country Name"
                  onBlur={props.handleBlur("country")}
                  className="w-96 p-2 rounded-sm  bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">Country Code</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.country_code && props.errors.country_code}
                  </p>
                </div>

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
                <div className="flex justify-between items-center">
                  <label className="text-white">Currency Symbol</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.currency && props.errors.currency}
                  </p>
                </div>
                <input
                  type="text"
                  name="currency"
                  value={props.values.currency}
                  onChange={props.handleChange("currency")}
                  onBlur={props.handleBlur("currency")}
                  placeholder="Enter Currency Symbol"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">With Vat</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.with_vat && props.errors.with_vat}
                  </p>
                </div>
                <input
                  type="text"
                  name="with_vat"
                  value={props.values.with_vat}
                  onChange={props.handleChange("with_vat")}
                  onBlur={props.handleBlur("  with_vat")}
                  placeholder="With VAT"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">View Vat</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.view_vat && props.errors.view_vat}
                  </p>
                </div>
                <input
                  type="text"
                  name="view_vat"
                  value={props.values.view_vat}
                  onChange={props.handleChange("view_vat")}
                  onBlur={props.handleBlur("view_vat")}
                  placeholder="View VAT"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex justify-end space-x-3 py-4">
                {dataTable.id && (
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          `http://localhost:3001/countries/${dataTable.id}`
                        )
                        .then((res) => {
                          alert("Country Deleted");
                          window.location.reload();
                        })
                        .catch((err) => alert(err.message));
                      setFormshow(false);
                    }}
                    className="bg-inherit border border-gray-200  active:animate-ping transition ease-linear duration-100 text-white p-1 px-5 rounded-sm"
                  >
                    DELETE
                  </button>
                )}
                <button
                  type="submit"
                  onClick={props.handleSubmit}
                  className="bg-inherit border border-gray-200  active:animate-ping transition ease-linear duration-100 text-white p-1 px-5 rounded-sm"
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
