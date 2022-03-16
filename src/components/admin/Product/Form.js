import React, { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import { CgClose } from "react-icons/cg";

import validationSchema from "./validation";

function Form({ setFormshow, dataTable }) {
  const [checkboxes, setCheckboxes] = useState([]);
  const [category, setCategory] = useState([]);
  const [multiImages, setMultiImages] = useState([]);
  const [imageName, setImageName] = useState("");
  let {
    id,
    description,
    code,
    cattegory_name,
    google_cattegory,
    brand,
    title,
    purchase_price,
    color,
    size,
    delivery_charges,
    quantity,
    quantity_text,
    fake_order_sold,
    rank,
    status,
    available_in,
    image,
  } = dataTable;

  const [checkboxValues, setCheckboxValues] = useState({
    1: {
      country_id: 0,
      product_id: "2",
      price: "",
      old_price: "",
      price_list: "",
    },
    2: {
      country_id: 0,
      product_id: "2",
      price: "",
      old_price: "",
      price_list: "",
    },
    3: {
      country_id: 0,
      product_id: "2",
      price: "",
      old_price: "",
      price_list: "",
    },
  });

  React.useEffect(() => {
    if (available_in) {
      setCheckboxes(available_in.split(","));
      axios
        .post("http://localhost:3001/products/pricing", {
          country_id: available_in.split(","),
          product_id: id,
        })
        .then(({ data }) => {
          var value = {};
          data.forEach((d) => {
            value[d.country_id] = d;
          });
          setCheckboxValues({
            ...checkboxValues,
            ...value,
          });
        })
        .catch((err) => alert(err.message));
    }
    axios
      .get("http://localhost:3001/category")
      .then(({ data }) => setCategory(data))
      .catch((err) => alert(err.message));
  }, []);

  const initialValues = {
    cattegory_name: cattegory_name || "",
    google_cattegory: google_cattegory || "",
    brand: brand || "",
    title: title || "",
    code: code || "",
    purchase_price: purchase_price || "",
    color: color || "",
    size: size ? size : "",
    delivery_charges: delivery_charges || "",
    quantity: quantity || "",
    quantity_text: quantity_text || "",
    fake_order_sold: fake_order_sold || "",
    rank: rank || "",
    description: description || "",
    status: status || "",
  };
  return (
    <div className="bg-gray-700 z-50 rounded-md py-0  h-full mb-10 overflow-y-scroll  w-fit px-7 pb-0 shadow-lg shadow-gray-600 text-white">
      <div className="flex justify-end pt-2 ">
        <CgClose
          className="cursor-pointer w-6 h-6"
          onClick={() => setFormshow(false)}
        />
      </div>
      <h1 className="text-center -mt-3 text-lg">Add / Edit Products</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          let prices = [];
          if (
            checkboxValues["1"].price !== 0 &&
            checkboxValues["1"].old_price &&
            checkboxValues["1"].price_list
          ) {
            prices.push({
              ...checkboxValues["1"],
              country_id: 1,
            });
          }
          if (
            checkboxValues["2"].price !== 0 &&
            checkboxValues["2"].old_price &&
            checkboxValues["2"].price_list
          ) {
            prices.push({
              ...checkboxValues["2"],
              country_id: 2,
            });
          }
          if (
            checkboxValues["3"].price !== 0 &&
            checkboxValues["3"].old_price &&
            checkboxValues["3"].price_list
          ) {
            prices.push({
              ...checkboxValues["3"],
              country_id: 3,
            });
          }
          actions.resetForm();
          if (!id) {
            axios
              .post("http://localhost:3001/products", {
                ...values,
                pricing: prices,
                price: prices[0].price,
                old_price: prices[0].old_price,
                price_list: prices[0].price_list,
                available_in: checkboxes.join(","),
                image: imageName,
              })
              .then(({ data }) => {
                id = data.insertId;
                alert("Product added");
                setFormshow(false);
              })
              .catch((err) => alert(err.message));
          } else {
            axios
              .patch("http://localhost:3001/products", {
                ...values,
                pricing: prices,
                price: prices[0].price,
                old_price: prices[0].old_price,
                price_list: prices[0].price_list,
                available_in: checkboxes.join(","),
                image: imageName ? "/images/products/" + imageName : image,
                id,
              })
              .then(({ data }) => {
                alert("Product updated");
                setFormshow(false);
              })
              .catch((err) => alert(err.message));
          }

          if (multiImages[0]) {
            axios
              .delete("http://localhost:3001/productImages/" + id)
              .then(({ data }) => {
                for (let i = 0; i < multiImages.length; i++) {
                  const formData = new FormData();
                  formData.append("files", multiImages[i]);
                  formData.append("filename", `${code}_image_${i + 1}`);
                  axios
                    .post("http://localhost:3001/productImages/" + id, formData)
                    .catch((err) => alert(err.message));
                }
              })
              .catch((err) => console.log(err.message));
          }
          window.location.reload();
          setFormshow(false);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col space-y-4 pt-3">
              <div className="space-y-2  px-2">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <label className="text-white">Category</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.cattegory_name &&
                          props.errors.cattegory_name}
                      </p>
                    </div>
                    <select
                      name="cattegory_name"
                      id=""
                      value={props.values.cattegory_name}
                      onChange={props.handleChange("cattegory_name")}
                      onBlur={props.handleBlur("cattegory_name")}
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    >
                      <option value="" className="text-gray-200 bg-gray-800">
                        -Select Category-
                      </option>
                      {category.map((c) => (
                        <option
                          key={c.id}
                          value={c.name}
                          className="text-gray-200 bg-gray-800"
                        >
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <label className="text-white">Google Category</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.google_cattegory &&
                          props.errors.google_cattegory}
                      </p>
                    </div>
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
                    <div className="flex justify-between items-center">
                      <label className="text-white">Brand</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.brand && props.errors.brand}
                      </p>
                    </div>
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
                    <div className="flex justify-between items-center">
                      <label className="text-white">Title</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.title && props.errors.title}
                      </p>
                    </div>
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
                    <div className="flex justify-between items-center">
                      <label className="text-white">Code</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.code && props.errors.code}
                      </p>
                    </div>
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
                    <div className="flex justify-between items-center">
                      <label className="text-white">Purchase Price</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.purchase_price &&
                          props.errors.purchase_price}
                      </p>
                    </div>
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
                    <div className="flex justify-between items-center">
                      <label className="text-white">Status</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.status && props.errors.status}
                      </p>
                    </div>
                    <select
                      type="text"
                      name="status"
                      value={props.values.status}
                      onChange={props.handleChange("status")}
                      onBlur={props.handleBlur("status")}
                      placeholder="Status"
                      className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                    >
                      <option className="text-gray-200 bg-gray-800">
                        --Select--
                      </option>
                      <option value="1" className="text-gray-200 bg-gray-800">
                        Enable
                      </option>
                      <option value="0" className="text-gray-200 bg-gray-800">
                        Disable
                      </option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <label className="text-white">Color</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.color && props.errors.color}
                      </p>
                    </div>
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
                    <div className="flex justify-between items-center">
                      <label className="text-white">Size</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.size && props.errors.size}
                      </p>
                    </div>
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
                    <div className="flex justify-between items-center">
                      <label className="text-white">Delivery Charges</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.delivery_charges &&
                          props.errors.delivery_charges}
                      </p>
                    </div>
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
                    <div className="flex justify-between items-center">
                      <label className="text-white">Quantity</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.quantity && props.errors.quantity}
                      </p>
                    </div>
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
                    <div className="flex justify-between items-center">
                      <label className="text-white">Quantity Text</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.quantity_text &&
                          props.errors.quantity_text}
                      </p>
                    </div>

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
                    <div className="flex justify-between items-center">
                      <label className="text-white">Fake Order Sold</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.fake_order_sold &&
                          props.errors.fake_order_sold}
                      </p>
                    </div>
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
                    <div className="flex justify-between items-center">
                      <label className="text-white">Rank</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.rank && props.errors.rank}
                      </p>
                    </div>
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
                        value={"1"}
                        checked={checkboxes.indexOf("1") !== -1}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCheckboxes(checkboxes.concat("1"));
                          } else {
                            setCheckboxes(
                              checkboxes.filter((check) => check !== "1")
                            );
                          }
                        }}
                        onBlur={props.handleBlur("checkboxes")}
                        className="mr-2"
                      />
                      <label className="text-white">UAE</label>
                    </div>

                    <input
                      type="text"
                      name="price"
                      value={checkboxValues["1"]["price"]}
                      onChange={(e) => {
                        console.log(e.target.value);
                        const price = e.target.value;
                        console.log(checkboxValues["1"]);
                        setCheckboxValues({
                          ...checkboxValues,
                          1: {
                            ...checkboxValues["1"],
                            price,
                          },
                        });
                      }}
                      placeholder="Price"
                      className="w-20 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />

                    <input
                      type="text"
                      name="old_price"
                      value={checkboxValues["1"]["old_price"]}
                      onChange={(e) => {
                        const old_price = e.target.value;
                        setCheckboxValues({
                          ...checkboxValues,
                          1: {
                            ...checkboxValues["1"],
                            old_price,
                          },
                        });
                      }}
                      placeholder="Old Price"
                      className="w-20 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />

                    <input
                      type="text"
                      name="price_list"
                      value={checkboxValues["1"]["price_list"]}
                      onChange={(e) => {
                        const price_list = e.target.value;
                        setCheckboxValues({
                          ...checkboxValues,
                          1: {
                            ...checkboxValues["1"],
                            price_list,
                          },
                        });
                      }}
                      placeholder="Price List"
                      className="w-80 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>

                  <div className="flex justify-between space-x-2 border border-gray-200 p-2 my-1">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="QATAR"
                        value={"2"}
                        checked={checkboxes.indexOf("2") !== -1}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCheckboxes(checkboxes.concat("2"));
                          } else {
                            setCheckboxes(
                              checkboxes.filter((check) => check !== "2")
                            );
                          }
                        }}
                        onBlur={props.handleBlur("checkboxes")}
                        className="mr-2"
                      />
                      <label className="text-white">QATAR</label>
                    </div>

                    <input
                      type="text"
                      name="price"
                      value={checkboxValues["2"]["price"]}
                      onChange={(e) => {
                        const price = e.target.value;
                        setCheckboxValues({
                          ...checkboxValues,
                          2: {
                            ...checkboxValues["2"],
                            price,
                          },
                        });
                      }}
                      placeholder="Price"
                      className="w-20 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />

                    <input
                      type="text"
                      name="old_price"
                      value={checkboxValues["2"]["old_price"]}
                      onChange={(e) => {
                        const old_price = e.target.value;
                        setCheckboxValues({
                          ...checkboxValues,
                          2: {
                            ...checkboxValues["2"],
                            old_price,
                          },
                        });
                      }}
                      placeholder="Old Price"
                      className="w-20 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />

                    <input
                      type="text"
                      name="price_list"
                      value={checkboxValues["2"]["price_list"]}
                      onChange={(e) => {
                        const price_list = e.target.value;
                        setCheckboxValues({
                          ...checkboxValues,
                          2: {
                            ...checkboxValues["2"],
                            price_list,
                          },
                        });
                      }}
                      placeholder="Price List"
                      className="w-80 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>

                  <div className="flex justify-between space-x-2 border border-gray-200 p-2 my-1">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="OMAN"
                        value={"3"}
                        checked={checkboxes.indexOf("3") !== -1}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setCheckboxes(checkboxes.concat("3"));
                          } else {
                            setCheckboxes(
                              checkboxes.filter((check) => check !== "3")
                            );
                          }
                        }}
                        onBlur={props.handleBlur("checkboxes")}
                        className="mr-2"
                      />
                      <label className="text-white">OMAN</label>
                    </div>

                    <input
                      type="text"
                      name="price"
                      value={checkboxValues["3"]["price"]}
                      onChange={(e) => {
                        const price = e.target.value;
                        setCheckboxValues({
                          ...checkboxValues,
                          3: {
                            ...checkboxValues["3"],
                            price,
                          },
                        });
                      }}
                      placeholder="Price"
                      className="w-20 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />

                    <input
                      type="text"
                      name="old_price"
                      value={checkboxValues["3"]["old_price"]}
                      onChange={(e) => {
                        const old_price = e.target.value;
                        setCheckboxValues({
                          ...checkboxValues,
                          3: {
                            ...checkboxValues["3"],
                            old_price,
                          },
                        });
                      }}
                      placeholder="Old Price"
                      className="w-20 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />

                    <input
                      type="text"
                      name="price_list"
                      value={checkboxValues["3"]["price_list"]}
                      onChange={(e) => {
                        const price_list = e.target.value;
                        setCheckboxValues({
                          ...checkboxValues,
                          3: {
                            ...checkboxValues["3"],
                            price_list,
                          },
                        });
                      }}
                      placeholder="Price List"
                      className="w-80 p-1 rounded-sm bg-inherit border border-gray-200 outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center">
                      <label className="text-white">Description</label>
                      <p className="text-red-500 text-xs">
                        {props.touched.description && props.errors.description}
                      </p>
                    </div>
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
                    onChange={(e) => {
                      const formData = new FormData();
                      setImageName(e.target.files[0].name);
                      formData.append("file", e.target.files[0]);
                      axios
                        .post(
                          "http://localhost:3001/products/productImage",
                          formData
                        )
                        .catch((err) => alert(err.message));
                    }}
                    onBlur={props.handleBlur("image")}
                    className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white">Extra Image</label>
                  <input
                    type="file"
                    name="extra_image"
                    multiple
                    onChange={(e) => setMultiImages(e.target.files)}
                    placeholder="Extra Image"
                    className="w-80 p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 py-2 ">
                {dataTable.id && (
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          "http://localhost:3001/products/" + dataTable.id
                        )
                        .then(({ data }) => {
                          alert("product deleted");
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
