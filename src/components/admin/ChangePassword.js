import axios from "axios";
import { Formik } from "formik";
import React from "react";

function ChangePassword() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col border border-gray-300 px-10 pt-6 pb-14 space-y-5 rounded-sm">
        <h1 className="text-2xl font-semibold font-serif text-center">
          Change Password
        </h1>
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.oldPassword) {
              errors.oldPassword = "Required";
            } else if (values.oldPassword.length < 6) {
              errors.oldPassword = "Must be 6 characters or more";
            }
            if (!values.newPassword) {
              errors.newPassword = "Required";
            } else if (values.newPassword.length < 6) {
              errors.newPassword = "Must be 6 characters or more";
            } else if (values.newPassword === values.oldPassword) {
              errors.newPassword = "Old and New Password shouldn't match";
            }
            if (!values.confirmPassword) {
              errors.confirmPassword = "Required";
            } else if (values.confirmPassword !== values.newPassword) {
              errors.confirmPassword = "Passwords must match";
            }
            return errors;
          }}
          onSubmit={(values, action) => {
            axios.patch("http://localhost:3001/admin/changepassword", {password: values.newPassword, user_name: JSON.parse(localStorage.getItem("admin_user")).user_name})
            .then(({data}) => {
              if(data === "user updated successfully") {
                 alert("Password Updated Successfully");
              } else {
                alert("Password Update Failed");
              }
            })
            .catch(err => alert(err.message));
            action.resetForm(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col w-80 h-20">
                <label className="text-lg font-semibold">Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={values.oldPassword}
                  onChange={handleChange("oldPassword")}
                  onBlur={handleBlur("oldPassword")}
                  className="w-full border border-gray-300 p-1 rounded-sm px-2 outline-none"
                />
                <p className="text-red-500 ">
                  {touched.oldPassword && errors.oldPassword}
                </p>
              </div>
              <div className="flex flex-col w-80 h-20">
                <label className="text-lg font-semibold">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  className="w-full border border-gray-300 p-1 rounded-sm px-2 outline-none"
                />
                <p className="text-red-500 ">
                  {touched.newPassword && errors.newPassword}
                </p>
              </div>
              <div className="flex flex-col w-80  h-20">
                <label className="text-lg font-semibold">
                  Re-Enter New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  className="w-full border border-gray-300 p-1 rounded-sm px-2 outline-none"
                />
                <p className="text-red-500 ">
                  {touched.confirmPassword && errors.confirmPassword}
                </p>
              </div>
              <div className="flex h-20 pt-3">
                <button
                  type="submit"
                  className="w-full h-10 flex justify-center items-center  border border-gray-300 p-1 rounded-sm px-2"
                >
                  <span className="text-lg font-semibold">Change Password</span>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ChangePassword;
