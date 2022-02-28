import { Formik } from "formik";
import React from "react";

import { CgClose } from "react-icons/cg";

function Form({ setFormshow, dataTable }) {
  const { id, country_name, address, facebook, instagram, email, whatsapp } =
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
          country_name: country_name ? country_name : "",
          address: address ? address : "",
          facebook: facebook ? facebook : "",
          instagram: instagram ? instagram : "",
          email: email ? email : "",
          whatsapp: whatsapp ? whatsapp : "",
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
                <label className="text-white">Country Name</label>
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
                <label className="text-white">Address</label>
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
                <label className="text-white">Facebook</label>
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
                <label className="text-white">Instagram</label>
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
                <label className="text-white">Email</label>
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
                <label className="text-white">WhatsApp</label>
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
                    onClick={() => setFormshow(false)}
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
