import React from "react";

import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";

import { CgClose } from "react-icons/cg";

const schema = yup.object({
  category_name: yup.string().required("category name is required").min(3),
  description: yup.string().required("category description is required").min(5),
});

function Form({ setFormshow, dataTable }) {
  const { name, description } = dataTable;
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
          category_name: name ? name : "",
          description: description ? description : "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          if (dataTable.id) {
            axios
              .patch("http://localhost:3001/category/", {
                ...values,
                id: dataTable.id,
              })
              .then((res) => {
                alert("category updated successfully");
                window.location.reload();
              })
              .catch((err) => alert(err.message));
          } else {
            axios
              .post("http://localhost:3001/category/", values)
              .then((res) => {
                alert("category inserted");
                window.location.reload();
              })
              .catch((err) => alert(err.message));
          }
          setFormshow(false);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex flex-col space-y-4 pt-5">
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">Category Name</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.category_name && props.errors.category_name}
                  </p>
                </div>
                <input
                  type="text"
                  name="category_name"
                  value={props.values.category_name}
                  onChange={props.handleChange("category_name")}
                  placeholder="Country Name"
                  onBlur={props.handleBlur("category_name")}
                  className="w-96 p-2 rounded-sm  bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">Description</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.description && props.errors.description}
                  </p>
                </div>
                <textarea
                  name="description"
                  value={props.values.description}
                  onChange={props.handleChange("description")}
                  onBlur={props.handleBlur("description")}
                  placeholder="Description"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3 py-4">
                {dataTable.id && (
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          "http://localhost:3001/category/" + dataTable.id
                        )
                        .then((res) => {
                          alert("category Deleted");
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
