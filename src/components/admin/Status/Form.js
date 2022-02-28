import { Formik } from "formik";
import React, { useState } from "react";
import { SketchPicker } from "react-color";

import { CgClose } from "react-icons/cg";

function Form({ setFormshow, dataTable }) {
  const [colorPicker, setColorPicker] = useState(dataTable.color);
  const [colorshow, setColorshow] = useState(false);

  return (
    <div className="bg-gray-700 z-50 rounded-sm py-2  h-fit w-fit px-4 pb-4 shadow-lg shadow-gray-600 text-white">
      <div className="flex justify-end pt-2 ">
        <CgClose
          className="cursor-pointer w-6 h-6"
          onClick={() => setFormshow(false)}
        />
      </div>
      <h1 className="text-center -mt-3 text-lg">Add / Edit Status</h1>

      <Formik
        initialValues={{
          title: dataTable.title ? dataTable.title : "",
          description: dataTable.description ? dataTable.description : "",
          color: dataTable.color ? dataTable.color : "#fff",
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
                <label className="text-white">Title</label>
                <input
                  type="text"
                  name="title"
                  value={props.values.title}
                  onChange={props.handleChange("title")}
                  placeholder="Title"
                  onBlur={props.handleBlur("title")}
                  className="w-96 p-2 rounded-sm  bg-inherit border border-gray-200 outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white">Description</label>
                <textarea
                  rows={3}
                  name="description"
                  value={props.values.description}
                  onChange={props.handleChange("description")}
                  onBlur={props.handleBlur("description")}
                  placeholder="Description"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className=" flex flex-col">
                <label className="text-white">Color</label>
                <div className="border border-gray-200 p-2 flex flex-col justify-center py-3">
                  <button
                    onClick={() => setColorshow(true)}
                    className={`w-20 h-5`}
                    style={{
                      backgroundColor: colorPicker,
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                {/* <label className="text-white">Color</label>
                <input
                  type="text"
                  name="color"
                  value={props.values.color}
                  onChange={props.handleChange("color")}
                  onBlur={props.handleBlur("color")}
                  placeholder="Color"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                /> */}
                {colorshow && (
                  <SketchPicker
                    color={colorPicker}
                    onChangeComplete={(color) => {
                      setColorPicker(color.hex);
                      props.setFieldValue("color", color.hex);
                    }}
                  />
                )}
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
