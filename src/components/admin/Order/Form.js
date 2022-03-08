import React from "react";

import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { CgClose } from "react-icons/cg";

const shema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3),
  mobile: Yup.string().required("Mobile is required").min(10),
  address: Yup.string().required("Address is required").min(10),
  city: Yup.string().required("City is required").min(3),
  product: Yup.string().required("Product is required").min(3),
  status: Yup.string().required("Status is required"),
});

function Form({ setFormshow, dataTable }) {
  const [status_state, setStatus] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/status")
      .then((res) => {
        setStatus(res.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className="bg-gray-700 z-50 rounded-sm py-2  h-fit w-fit px-4 pb-4 shadow-lg shadow-gray-600 text-white">
      <div className="flex justify-end pt-2 ">
        <CgClose
          className="cursor-pointer w-6 h-6"
          onClick={() => setFormshow(false)}
        />
      </div>
      <h1 className="text-center -mt-3 text-lg">Add / Edit Order</h1>

      <Formik
        initialValues={{
          name: dataTable.full_name ? dataTable.full_name : "",
          mobile: dataTable.phone ? dataTable.phone : "",
          address: dataTable.address ? dataTable.address : "",
          city: dataTable.city ? dataTable.city : "",
          product: dataTable.title ? dataTable.title : "",
          status: dataTable.status_id ? dataTable.status_id : "",
        }}
        validationSchema={shema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          axios
            .patch("http://localhost:3001/orders/", {
              ...values,
              id: dataTable.client_id,
              prod_id: dataTable.product_id,
            })
            .then((res) => {
              alert("order updated successfully");
              setFormshow(false);
              window.location.reload();
            })
            .catch((err) => alert(err.message));
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col space-y-4 pt-5">
              <div className="flex space-x-2">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <label className="text-white">Name</label>
                    <p className="text-red-500 text-xs">
                      {props.touched.name && props.errors.name}
                    </p>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={props.values.name}
                    onChange={props.handleChange("name")}
                    placeholder="Name"
                    onBlur={props.handleBlur("name")}
                    className="w-60 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <label className="text-white">Mobile</label>
                    <p className="text-red-500 text-xs">
                      {props.touched.mobile && props.errors.mobile}
                    </p>
                  </div>
                  <input
                    type="number"
                    name="mobile"
                    value={props.values.mobile}
                    onChange={props.handleChange("mobile")}
                    onBlur={props.handleBlur("mobile")}
                    placeholder="Mobile"
                    className="w-60 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">Address</label>
                  <p className="text-red-500 text-xs">
                    {props.touched.address && props.errors.address}
                  </p>
                </div>
                <textarea
                  rows={3}
                  name="address"
                  value={props.values.address}
                  onChange={props.handleChange("address")}
                  onBlur={props.handleBlur("address")}
                  placeholder="Address"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">City</label>
                  <p className="text-red-500 text-xs">
                    {props.touched.city && props.errors.city}
                  </p>
                </div>
                <input
                  type="text"
                  name="city"
                  value={props.values.city}
                  onChange={props.handleChange("city")}
                  onBlur={props.handleBlur("city")}
                  placeholder="City"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">Product</label>
                  <p className="text-red-500 text-xs">
                    {props.touched.product && props.errors.product}
                  </p>
                </div>
                <input
                  type="text"
                  name="product"
                  value={props.values.product}
                  onChange={props.handleChange("product")}
                  onBlur={props.handleBlur("product")}
                  placeholder="Product"
                  disabled
                  className="w-full p-2  rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">Status</label>
                  <p className="text-red-500 text-xs">
                    {props.touched.status && props.errors.status}
                  </p>
                </div>
                <select
                  name="status"
                  value={props.values.status}
                  onChange={props.handleChange("status")}
                  onBlur={props.handleBlur("status")}
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                >
                  <option className="bg-gray-800 text-white">--Select--</option>
                  {status_state.map((item) => (
                    <option
                      key={item.id}
                      value={item.id}
                      className="bg-gray-800 text-white"
                    >
                      {item.status}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-3 py-4">
                {dataTable.order_id && (
                  <div
                    onClick={() => {
                      axios
                        .delete(
                          "http://localhost:3001/orders/" + dataTable.order_id
                        )
                        .then((res) => {
                          alert("Order Deleted");
                          window.location.reload();
                        })
                        .catch((err) => alert(err.message));
                      setFormshow(false);
                    }}
                    className="bg-inherit border border-gray-200  active:animate-ping transition ease-linear duration-100 text-white p-1 px-5 rounded-sm"
                  >
                    DELETE
                  </div>
                )}
                <button
                  type="submit"
                  onClick={props.handleSubmit}
                  className="bg-inherit active:animate-ping transition ease-linear duration-100 border border-gray-200 text-white p-1 px-5 rounded-sm"
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
