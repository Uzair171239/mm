import { Formik } from "formik";
import React from "react";

import { CgClose } from "react-icons/cg";

function Form({ setFormshow, dataTable }) {
  const {
    delivery,
    mobile_discount,
    new_status,
    dispatch_status,
    track_status,
  } = dataTable;
  return (
    <div className="bg-gray-700 z-50 rounded-sm py-2  h-fit w-fit px-4 pb-4 shadow-lg shadow-gray-600 text-white">
      <div className="flex justify-end pt-2 ">
        <CgClose
          className="cursor-pointer w-6 h-6"
          onClick={() => setFormshow(false)}
        />
      </div>
      <h1 className="text-center -mt-3 text-lg">Add / Edit Settings</h1>

      <Formik
        initialValues={{
          delivery: delivery ? delivery : "",
          mobile_discount: mobile_discount ? mobile_discount : "",
          new_status: new_status ? new_status : "",
          dispatch_status: dispatch_status ? dispatch_status : "",
          track_status: track_status ? track_status : "",
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          setFormshow(false);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col space-y-4 pt-5">
              <div className="flex flex-col">
                <label className="text-white">Delivery</label>
                <input
                  type="text"
                  name="delivery"
                  value={props.values.delivery}
                  onChange={props.handleChange("delivery")}
                  placeholder="Delivery"
                  onBlur={props.handleBlur("delivery")}
                  className="w-96 p-2 rounded-sm  bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">Mobile Discount</label>
                <input
                  type="text"
                  name="mobile_discount"
                  value={props.values.mobile_discount}
                  onChange={props.handleChange("mobile_discount")}
                  onBlur={props.handleBlur("mobile_discount")}
                  placeholder="Mobile Discount"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">New Status</label>
                <input
                  type="text"
                  name="new_status"
                  value={props.values.new_status}
                  onChange={props.handleChange("new_status")}
                  onBlur={props.handleBlur("new_status")}
                  placeholder="New Status"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">Dispatch Status</label>
                <input
                  type="text"
                  name="dispatch_status"
                  value={props.values.dispatch_status}
                  onChange={props.handleChange("dispatch_status")}
                  onBlur={props.handleBlur("dispatch_status")}
                  placeholder="Dispatch Status"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">Track Status</label>
                <input
                  type="text"
                  name="track_status"
                  value={props.values.track_status}
                  onChange={props.handleChange("track_status")}
                  onBlur={props.handleBlur("track_status")}
                  placeholder="Track Status"
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
                  className="bg-inherit active:animate-ping transition ease-linear duration-100 border  border-gray-200 text-white p-1 px-5 rounded-sm"
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
