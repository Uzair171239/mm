import { Formik } from "formik";
import React from "react";
import axios from "axios";
import { CgClose } from "react-icons/cg";

function Form({ setFormshow, dataTable }) {
  const { country, country_code, currency, with_vat, view_vat } =
    dataTable;
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
        onSubmit={(values, actions) => {

          if(dataTable.id){
            axios.patch('http://localhost:3001/countries',{
              ...values,
              id: dataTable.id,
            }).then(res => {alert('Country Updated')}).catch(err => alert(err.message))
          }
          else{
            axios.post('http://localhost:3001/countries',values).then(res => {alert('Country Added')}).catch(err => alert(err.message))
          }
          actions.resetForm();
          setFormshow(false);
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
                  value={props.values.country}
                  onChange={props.handleChange("country")}
                  placeholder="Enter Country Name"
                  onBlur={props.handleBlur("country")}
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
                  name="currency"
                  value={props.values.currency}
                  onChange={props.handleChange("currency")}
                  onBlur={props.handleBlur("currency")}
                  placeholder="Enter Currency Symbol"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">With Vat</label>
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
                <label className="text-white">View Vat</label>
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
                      axios.delete(`http://localhost:3001/countries/${dataTable.id}`).then(res => {alert('Country Deleted')}).catch(err => alert(err.message))
                      setFormshow(false)}}
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
