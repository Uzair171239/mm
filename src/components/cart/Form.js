import React from "react";
import { Country, State, City }  from 'country-state-city';
import { Formik } from "formik";
import * as yup from "yup";
// import Select from "react-select";
// import countryList from "react-select-country-list";
import {BsCartCheckFill} from "react-icons/bs";
import axios from "axios";

const schema = yup.object({
  fullName: yup
    .string()
    .required("Please enter Your Full Name ")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  Mobile: yup
    .string()
    .required("Mobile Number is Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  quantity: yup.string().required("Quantity is required"),
  city: yup.string().required("City is required"),
  deliveryAddress: yup
    .string()
    .required("Delivery Address is required")
    .min(12),
});

function Form({ product }) {
  const [cities, setCities] = React.useState([]);
  const [countries, setCountries] = React.useState([]);
  const [select_country, set_select_country] = React.useState("");
  const [country, setCountry] = React.useState("Select");
  // const [country, set_Country] = React.useState("");
  // const country = Country.getCountryByCode("IN");
  // console.log(City.getCitiesOfCountry("QA"));

  React.useEffect(() => { 
     axios.get("http://localhost:3001/getcities").then(({data})=> {
      setCountries(data);
     }).catch(err => console.log(err))
  },[])
  
  const { price, old_price, price_list, color } = product;

  const list_of_price = price_list.split(",").map(item => item.split("").reverse().join(""));
  // const options = useMemo(() => countryList().getData(), []);
  return (
    <div className="flex flex-col space-y-1 px-3 bg-white border border-gray-300 shadow-sm py-10 h-fit">
      <h1 className="text-3xl font-semibold ">IVD Glucometer Set</h1>
      <p className="text-green-500 text-sm font-semibold flex items-baseline "><BsCartCheckFill className="mr-2"/>671 sold</p>
      <div className="flex space-x-4 py-1">
        <h2 className="font-semibold">{price} AED</h2>
        <p className="text-gray-500 line-through">{old_price} AED</p>
      </div>
      <Formik
        initialValues={{
          fullName: "",
          Mobile: "",
          color: "",
          quantity: "",
          country: "",
          city: "",
          deliveryAddress: "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          // actions.resetForm();
          axios.post("http://localhost:3001/setorder", {
            ...product,
            ...values,
          }).then((res)=> {
            actions.resetForm()
            res.status === 200 && alert("Order Placed Successfully")
          }).catch(err => alert(err.message))
        }}
      >
        {(props) => (
          <div className="space-y-3">
            <div className="flex flex-col mt-2 space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.fullName && props.errors.fullName}
                </span>
              </div>
              <input
                type="text"
                onChange={props.handleChange("fullName")}
                value={props.values.fullName}
                placeholder="Full Name"
                className="border border-gray-300 rounded-sm p-2 outline-none"
                onBlur={props.handleBlur("fullName")}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                  Mobile<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.Mobile && props.errors.Mobile}
                </span>
              </div>
              <input
                type="text"
                onChange={props.handleChange("Mobile")}
                value={props.values.Mobile}
                placeholder="Mobile"
                className="border border-gray-300 rounded-sm p-2 outline-none"
                onBlur={props.handleBlur("Mobile")}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                  Quantity<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.quantity && props.errors.quantity}
                </span>
              </div>
             <select
                name="quantity"
                onChange={props.handleChange("quantity")}
                value={props.values.quantity}
                className="border border-gray-300 rounded-sm p-2 outline-none"
                onBlur={props.handleBlur("quantity")}
              >
                <option>-Select-</option>
                {list_of_price.map((item, index) => {
                   return <option key={index} value={item+" AED"}>{item} AED</option>
                })
              }
              </select> 
               
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="Color">
                  Color<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.quantity && props.errors.quantity}
                </span>
              </div>
             <select
                name="color"
                onChange={props.handleChange("color")}
                value={props.values.color}
                className="border border-gray-300 rounded-sm p-2 outline-none"
                onBlur={props.handleBlur("color")}
              >
                <option>-Select-</option>
                {color.split(",").map((item, index) => {
                   return <option key={index} value={item}>{item}</option>
                })
              }
              </select>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                  Country<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.countries && props.errors.countries}
                </span>
              </div>
              <select
              name="country"
              onChange={e => {
                (e.target.value !== "-Select-") ? setCountry(countries.find(item => item.country_code === e.target.value).country) : setCountry("Select");
                
                // setCountry("select")
                set_select_country(e.target.value);
                setCities(City.getCitiesOfCountry(e.target.value));
              }}
              value={select_country}
              className="border border-gray-300 rounded-sm p-2 outline-none"
              onBlur={props.handleBlur("country")}
            >
              <option>-Select-</option>
              {countries.map(country => {
                return (
                  <option key={country.id} value={country.country_code}>
                    {country.country}
                  </option>
                );
              })}
            </select> 
            </div>


            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                {country}<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.city && props.errors.city}
                </span>
              </div>
              <select
              name="city"
              onChange={props.handleChange("city")}
              value={props.values.city}
              className="border border-gray-300 rounded-sm p-2 outline-none"
              onBlur={props.handleBlur("city")}
            >
              <option>-Select-</option>
              {cities.map(city => {
                return (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
               
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                  Delivery Address<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.deliveryAddress &&
                    props.errors.deliveryAddress}
                </span>
              </div>
              <textarea
                rows={3}
                name="deliveryAddress"
                onChange={props.handleChange("deliveryAddress")}
                value={props.values.deliveryAddress}
                placeholder="Delivery Address"
                className="border border-gray-300 rounded-sm p-2 pt-1 outline-none"
                onBlur={props.handleBlur("deliveryAddress")}
              />
            </div>
            <button
              type="submit"
              onClick={props.handleSubmit}
              className="inline-block w-full  py-3 bg-green-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-grenn-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out "
            >
              SUBMIT ORDER
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Form;
