import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";

const schema = yup.object({
  username: yup.string().required("Please enter Your User Name ").min(4),
  password: yup.string().required("Please enter Your Password ").min(5),
});
function LoginForm() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center items-center bg-white">
      <div className="bg-gray-900 shadow-2xl shadow-gray-600 rounded-md py-16 px-14 pb-20">
        <h1 className="text-white text-2xl text-center font-serif ">
          SignIn
        </h1>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            axios.post("http://localhost:3001/admin/login", values).then(({data}) => {
              if(data !== "user name or password is incorrect"){
              localStorage.setItem("admin_user", JSON.stringify(data));
              navigate("/admin-dashboard");
              }
              else {
                alert("Invalid User Name or Password");
              }
            }).catch((err) => {
                alert(err.message);
            })
          }}
        >
          {(props) => (
            <div className="flex flex-col mt-10">
              <div className="flex flex-col h-24 space-y-1">
                <input
                  type="text"
                  name="username"
                  value={props.values.username}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  placeholder="User Name"
                  autoComplete="off"
                  className="bg-inherit border border-gray-100 w-72 p-2 outline-none rounded-sm text-white"
                />
                <span className="text-red-500">
                  {props.touched.username && props.errors.username}
                </span>
              </div>
              <div className="flex flex-col h-24 space-y-1">
                <input
                  type="password"
                  name="password"
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  placeholder="Password"
                  className="bg-inherit border border-gray-100 w-72 p-2 outline-none rounded-sm text-white"
                />
                <span className="text-red-500">
                  {props.touched.password && props.errors.password}
                </span>
              </div>
              <button
                onClick={props.handleSubmit}
                type="submit"
                className="bg-red-600 text-lg  active:animate-ping transition ease-linear duration-100 text-white p-2 rounded-sm font-semibold hover:bg-red-800"
              >
                LogIn
              </button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
