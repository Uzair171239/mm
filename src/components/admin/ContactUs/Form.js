import React from "react";

import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { CgClose, CgPushChevronUpO } from "react-icons/cg";

const schema = yup.object({
  country_name: yup.string().required("country name is required").min(3),
  address: yup.string().required("country address is required").min(5),
  facebook: yup.string().required("facebook is required").min(5),
  instagram: yup.string().required("instagram is required").min(5),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  whatsapp: yup.string().required("whatsapp is required").min(10),
});

function Form({ setFormshow, dataTable }) {
  const { country_name, address, facebook, instagram, email, whatsapp } =
    dataTable;
  return (
    <div className="bg-gray-700 z-50 rounded-sm py-2  h-fit w-fit px-4 pb-4 shadow-lg shadow-gray-600 text-white">
      <div className="flex justify-end pt-2 ">
        <CgClose
          className="cursor-pointer w-6 h-6"
          onClick={() => setFormshow(false)}
        />
      </div>
      <h1 className="text-center -mt-3 text-lg">Add / Edit Contact</h1>

      <Formik
        initialValues={{
          country_name: country_name ? country_name : "",
          address: address ? address : "",
          facebook: facebook ? facebook : "",
          instagram: instagram ? instagram : "",
          email: email ? email : "",
          whatsapp: whatsapp ? whatsapp : "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          if (dataTable.id) {
            axios
              .patch("http://localhost:3001/contacts", {
                ...values,
                id: dataTable.id,
              })
              .then((res) => {
                alert("Contact Updated");
                window.location.reload();
              })
              .catch((err) => alert(err.message));
          } else {
            axios
              .post("http://localhost:3001/contacts", values)
              .then((res) => {
                alert("Contact Added");
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
                  <label className="text-white">Country Name</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.country_name && props.errors.country_name}
                  </p>
                </div>
                <input
                  type="text"
                  name="country_name"
                  value={props.values.country_name}
                  onChange={props.handleChange("country_name")}
                  placeholder="Country Name"
                  onBlur={props.handleBlur("country_name")}
                  className="w-96 p-2 rounded-sm  bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">Address</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.address && props.errors.address}
                  </p>
                </div>
                <textarea
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
                  <label className="text-white">Facebook</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.facebook && props.errors.facebook}
                  </p>
                </div>
                <input
                  type="text"
                  name="facebook"
                  value={props.values.facebook}
                  onChange={props.handleChange("facebook")}
                  onBlur={props.handleBlur("  facebook")}
                  placeholder=" Facebook"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">Instagram</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.instagram && props.errors.instagram}
                  </p>
                </div>
                <input
                  type="text"
                  name="instagram"
                  value={props.values.instagram}
                  onChange={props.handleChange("instagram")}
                  onBlur={props.handleBlur("  instagram")}
                  placeholder=" Instagram"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">Email</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.email && props.errors.email}
                  </p>
                </div>
                <input
                  type="email"
                  name="email"
                  value={props.values.email}
                  onChange={props.handleChange("email")}
                  onBlur={props.handleBlur("  email")}
                  placeholder="Email"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="text-white">WhatsApp</label>
                  <p className="text-red-500 text-sm">
                    {props.touched.whatsapp && props.errors.whatsapp}
                  </p>
                </div>
                <input
                  type="text"
                  name="whatsapp"
                  value={props.values.whatsapp}
                  onChange={props.handleChange("whatsapp")}
                  onBlur={props.handleBlur("  whatsapp")}
                  placeholder="WhatsApp"
                  className="w-full p-2 rounded-sm bg-inherit border border-gray-200 outline-none"
                />
              </div>

              <div className="flex justify-end space-x-3 py-4">
                {dataTable.id && (
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          `http://localhost:3001/contacts/${dataTable.id}`
                        )
                        .then((res) => {
                          alert("Contact Deleted");
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
                  className="bg-inherit border border-gray-200 active:animate-ping transition ease-linear duration-100 text-white p-1 px-5 rounded-sm"
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
