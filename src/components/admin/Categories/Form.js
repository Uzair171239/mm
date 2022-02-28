import { Formik } from "formik";
import React from "react";

import { CgClose } from "react-icons/cg";

function Form({ setFormshow, dataTable }) {
  const { category_name, description, created_on } = dataTable;
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
          category_name: category_name ? category_name : "",
          description: description ? description : "",
          created_on: created_on ? created_on : "",
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
                <label className="text-white">Category Name</label>
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
                <label className="text-white">Description</label>
                <textarea
                  name="description"
                  value={props.values.description}
                  onChange={props.handleChange("description")}
                  onBlur={props.handleBlur("description")}
                  placeholder="Description"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white">Created On</label>
                <input
                  type="text"
                  name="created_on"
                  value={props.values.created_on}
                  onChange={props.handleChange("created_on")}
                  onBlur={props.handleBlur("created_on")}
                  placeholder="Created On"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3 py-4">
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
