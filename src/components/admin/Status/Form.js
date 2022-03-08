import React, { useState } from "react";

import { Formik } from "formik";
import * as yup from "yup";
import { SketchPicker } from "react-color";
import axios from "axios";
import { CgClose } from "react-icons/cg";

const schema = yup.object({
  status: yup.string().required("Status is required"),
  description: yup.string().required("Description is required").min(5),
  color: yup.string().required("Color is required"),
});

function Form({ setFormshow, dataTable }) {
  const [colorPicker, setColorPicker] = useState(
    dataTable.color ? dataTable.color : "#ffffff"
  );
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
          status: dataTable.status ? dataTable.status : "",
          description: dataTable.description ? dataTable.description : "",
          color: dataTable.color ? dataTable.color : "#ffffff",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          if (dataTable.id) {
            axios
              .patch("http://localhost:3001/status", {
                ...values,
                id: dataTable.id,
              })
              .then((res) => {
                alert("status updated");
                window.location.reload();
              })
              .catch((err) => alert(err.message));
          } else {
            axios
              .post("http://localhost:3001/status", values)
              .then((res) => {
                alert("status inserted");
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
                  <label className="text-white">Status</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.status && props.errors.status}
                  </p>
                </div>

                <input
                  type="text"
                  name="status"
                  value={props.values.status}
                  onChange={props.handleChange("status")}
                  placeholder="status"
                  onBlur={props.handleBlur("status")}
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
                <div className="flex justify-between items-center">
                  <label className="text-white">Color</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.color && props.errors.color}
                  </p>
                </div>
                <div className="border border-gray-200 p-2 flex flex-col justify-center py-3">
                  <div
                    onClick={() => setColorshow(!colorshow)}
                    className={`w-20 h-5 cursor-pointer`}
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
                    onClick={() => {
                      axios
                        .delete("http://localhost:3001/status/" + dataTable.id)
                        .then((res) => {
                          alert("Status deleted");
                          window.location.reload();
                        })
                        .catch((err) => alert(err));
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
