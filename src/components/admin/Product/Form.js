import { Formik } from "formik";
import React, { useState } from "react";

import { CgClose } from "react-icons/cg";

function Form({ setFormshow, dataTable }) {
  const [checkboxes, setCheckboxes] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [disable_check_fields_1, set_disable_check_fields_1] = useState(true);
  const [disable_check_fields_2, set_disable_check_fields_2] = useState(true);
  const [disable_check_fields_3, set_disable_check_fields_3] = useState(true);
  const {
    price,
    description,
    code,
    cattegory_name,
    google_cattegory,
    brand,
    title,
    purchase_price,
    price_list,
    old_price,
    color,
    size,
    delivery_charges,
    quantity,
    quantity_text,
    fake_order_sold,
    rank,
    status,
  } = dataTable;
  const check = [
    {
      id: 1,
      country_name: "India",
    },
    {
      id: 2,
      country_name: "Pakistan",
    },
    {
      id: 3,
      country_name: "Iran",
    },
  ];
  const initialValues = {
    cattegory_name: cattegory_name || "",
    google_cattegory: google_cattegory || "",
    brand: brand || "",
    title: title || "",
    code: code || "",
    purchase_price: purchase_price || "",
    price_1: price || "",
    old_price_1: old_price || "",
    price_list_1: price_list || "",
    price_1: price || "",
    old_price_1: old_price || "",
    price_list_1: price_list || "",
    price_1: price || "",
    old_price_1: old_price || "",
    price_list_1: price_list || "",
    color: color || "",
    size: size ? size : "",
    delivery_charges: delivery_charges || "",
    quantity: quantity || "",
    quantity_text: quantity_text || "",
    fake_order_sold: fake_order_sold || "",
    rank: rank || "",
    description: description || "",
    status: status || "",
    image: "",
  };
  return (
    <div className="bg-gray-700 z-50 rounded-sm py-0  h-fit w-fit px-7 pb-0 shadow-lg shadow-gray-600 text-white">
      <div className="flex justify-end pt-2 ">
        <CgClose
          className="cursor-pointer w-6 h-6"
          onClick={() => setFormshow(false)}
        />
      </div>
      <h1 className="text-center -mt-3 text-lg">Add / Edit Products</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log({
            ...values,
            countries: checkboxes.join(","),
          });
          setFormshow(false);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col space-y-4 pt-3">
              <div className="space-y-2 h-110 overflow-y-scroll px-2">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Category</label>
                    <select
                      name="cattegory_name"
                      id=""
                      value={props.values.cattegory_name}
                      onChange={props.handleChange("cattegory_name")}
                      onBlur={props.handleBlur("cattegory_name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    >
                      <option value="" className="text-gray-800 bg-gray-200">
                        -Select Category-
                      </option>
                      <option value="" className="text-gray-800 bg-gray-200">
                        Category 1
                      </option>
                      <option value="" className="text-gray-800 bg-gray-200">
                        Category 2
                      </option>
                      <option value="" className="text-gray-800 bg-gray-200">
                        Category 3
                      </option>
                    </select>
                    {/* <input
                      type="text"
                      name="category"
                      value={props.values.name}
                      onChange={props.handleChange("name")}
                      placeholder="Name"
                      onBlur={props.handleBlur("name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    /> */}
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Google Category</label>
                    <input
                      type="text"
                      name="google_cattegory"
                      value={props.values.google_cattegory}
                      onChange={props.handleChange("google_cattegory")}
                      onBlur={props.handleBlur("google_cattegory")}
                      placeholder="Google Category"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Brand</label>
                    <input
                      type="text"
                      name="brand"
                      value={props.values.brand}
                      onChange={props.handleChange("brand")}
                      placeholder="Brand"
                      onBlur={props.handleBlur("brand")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={props.values.title}
                      onChange={props.handleChange("title")}
                      onBlur={props.handleBlur("title")}
                      placeholder="Title"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Code</label>
                    <input
                      type="text"
                      name="code"
                      value={props.values.code}
                      onChange={props.handleChange("code")}
                      placeholder="Code"
                      onBlur={props.handleBlur("code")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Purchase Price</label>
                    <input
                      type="text"
                      name="purchase_price"
                      value={props.values.purchase_price}
                      onChange={props.handleChange("purchase_price")}
                      onBlur={props.handleBlur("purchase_price")}
                      placeholder="Purchase Price"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Status</label>
                    <input
                      type="text"
                      name="status"
                      value={props.values.status}
                      onChange={props.handleChange("status")}
                      onBlur={props.handleBlur("status")}
                      placeholder="Status"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-white">Color</label>
                    <input
                      type="text"
                      name="color"
                      value={props.values.color}
                      onChange={props.handleChange("color")}
                      onBlur={props.handleBlur("color")}
                      placeholder="Color"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Size</label>
                    <input
                      type="text"
                      name="size"
                      value={props.values.size}
                      onChange={props.handleChange("size")}
                      placeholder="Size"
                      onBlur={props.handleBlur("size")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Delivery Charges</label>
                    <input
                      type="text"
                      name="delivery_charges"
                      value={props.values.delivery_charges}
                      onChange={props.handleChange("delivery_charges")}
                      onBlur={props.handleBlur("delivery_charges")}
                      placeholder="Delivery Charges"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={props.values.quantity}
                      onChange={props.handleChange("quantity")}
                      placeholder="Quantity"
                      onBlur={props.handleBlur("quantity")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Quantity Text</label>
                    <input
                      type="text"
                      name="quantity_text"
                      value={props.values.quantity_text}
                      onChange={props.handleChange("quantity_text")}
                      onBlur={props.handleBlur("quantity_text")}
                      placeholder="Quantity Text"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <label className="text-white">Fake Order Sold</label>
                    <input
                      type="text"
                      name="fake_order_sold"
                      value={props.values.fake_order_sold}
                      onChange={props.handleChange("fake_order_sold")}
                      placeholder="Fake Order Sold"
                      onBlur={props.handleBlur("fake_order_sold")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Rank</label>
                    <input
                      type="text"
                      name="rank"
                      value={props.values.rank}
                      onChange={props.handleChange("rank")}
                      onBlur={props.handleBlur("rank")}
                      placeholder="Rank"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  
                <label className="text-white">Countries</label>
               
                          <div className="flex justify-between space-x-2 border border-gray-200 p-2 my-1">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                name="United Arab Emirates"
                                value={"United Arab Emirates"}
                                onChange={(e) => {
                                  if(e.target.checked){
                                    setCheckboxes(checkboxes.concat(1))
                                    }
                                    else { 
                                      setCheckboxes(checkboxes.filter((check) => check !== 1));
                                    }
                                }}
                                onBlur={props.handleBlur("checkboxes")}
                                className="mr-2"
                              />
                              <label className="text-white">
                              UAE
                              </label>
                            </div>
                        
                              
                                <input
                                  type="text"
                                  name="price"
                                  value={props.values.price}
                                  onChange={e => {
                                    setCheckboxValues([])
                                  }}
                                  placeholder="Price"
                                  onBlur={props.handleBlur("price")}
                                  className="w-20 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                                />
                            
                                <input
                                  type="text"
                                  name="old_price"
                                  value={props.values.old_price}
                                  onChange={props.handleChange("old_price")}
                                  placeholder="Old Price"
                                  onBlur={props.handleBlur("old_price")}
                                  className="w-20 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                                />
                            
                                <input
                                  type="text"
                                  name="price_list"
                                  value={props.values.price_list}
                                  onChange={props.handleChange("price_list")}
                                  onBlur={props.handleBlur("price_list")}
                                  placeholder="Price List"
                                  className="w-80 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                                /> 
                          </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col w-full">
                    <label className="text-white">Description</label>
                    <textarea
                      rows={3}
                      name="description"
                      value={props.values.description}
                      onChange={props.handleChange("description")}
                      placeholder="Description"
                      onBlur={props.handleBlur("description")}
                      className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 pl-2">
                <div className="flex flex-col">
                  <label className="text-white">View Image</label>
                  <input
                    type="file"
                    name="image"
                    value={props.values.image}
                    onChange={props.handleChange("image")}
                    onBlur={props.handleBlur("image")}
                    className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white">Extra Image</label>
                  <input
                    type="file"
                    name="extra_image"
                    value={props.values.extra_image}
                    onChange={props.handleChange("extra_image")}
                    onBlur={props.handleBlur("extra_image")}
                    placeholder="Extra Image"
                    className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 py-2">
                {dataTable.id && (
                  <button
                    onClick={() => setFormshow(false)}
                    className="bg-inherit border border-gray-200  active:animate-ping transition ease-linear duration-100 text-white p-1 px-5 rounded-sm"
                  >
                    DELETE
                  </button>
                )}
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
