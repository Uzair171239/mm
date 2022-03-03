import React from "react";
import { City } from "country-state-city";
import { Formik } from "formik";
import * as yup from "yup";
// import Select from "react-select";
// import countryList from "react-select-country-list";
import { BsCartCheckFill } from "react-icons/bs";
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
  city: yup.string().required("City is required"),
  deliveryAddress: yup
    .string()
    .required("Delivery Address is required")
    .min(12),
    quantity: yup.number().required("Quantity is required"),
    color: yup.string().required("Color is required"),
    select_country: yup.string().required("Country is required"),
});

function Form({ product }) {
  const [cities, setCities] = React.useState([]);
  const [countries, setCountries] = React.useState([]);
  const [select_country, set_select_country] = React.useState("");
  const [country, setCountry] = React.useState("Select");
  const [price, setPrice] = React.useState("");
  const [old_price, set_old_price] = React.useState("");
  const [quantity, setQuantitty] = React.useState("--Select--");
  const [currency, setCurrency] = React.useState("");
  const [Mobile, setMobile] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [price_list, set_price_list] = React.useState(
    product.price_list
      .split(",")
      .map((item) => item.split("").reverse().join(""))
  );
  // const [country, set_Country] = React.useState("");
  // const country = Country.getCountryByCode("IN");
  // console.log(City.getCitiesOfCountry("QA"));

  React.useEffect(() => {
    axios
      .post("http://localhost:3001/countries", {
        product_id: product.id,
        country_id: product.available_in,
      })
      .then(({ data }) => {
        setCountries(data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    return () => {
      console.log(fullName && Mobile);
      if (fullName && Mobile) {
        axios
          .post("http://localhost:3001/orders/missing_orders", {
            id: product.id,
            client_name: fullName,
            phone_number: Mobile,
            quantity,
          })
          .catch((err) => alert(err));
      }
    };
  }, [fullName, Mobile]);
  // const options = useMemo(() => countryList().getData(), []);
  const { color } = product;
  return (
    <div className="flex flex-col space-y-1 px-3 bg-white border border-gray-300 shadow-sm py-2 h-fit">
      <h1 className="text-3xl font-semibold ">IVD Glucometer Set</h1>
      <p className="text-green-500 text-sm font-semibold flex items-baseline ">
        <BsCartCheckFill className="mr-2" />
        671 sold
      </p>
      <div className="flex space-x-4 py-1">
        <h2 className="font-semibold">{price}</h2>
        <p className="text-gray-500 line-through">{old_price}</p>
      </div>
      <Formik
        initialValues={{
          color: "",
          quantity: "",
          city: "",
          deliveryAddress: "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          // actions.resetForm();
          axios
            .post("http://localhost:3001/orders", {
              ...product,
              ...values,
              country,
              quantity,
            })
            .then((res) => {
              // actions.resetForm()
              res.status === 200 && alert("Order Placed Successfully");
            })
            .catch((err) => console.log(err.message));
        }}
      >
        {(props) => (
          <div className="space-y-3">
            <div className="flex flex-col space-y-1">
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between items-center">
                  <label htmlFor="fullName">
                    Country<span className="text-red-500">*</span>
                  </label>
                  <span className="text-red-600">
                    {props.errors.select_country}
                  </span>
                </div>
                <select
                  name="country"
                  onChange={(e) => {
                    e.target.value !== "-Select-"
                      ? setCountry(
                          countries.find(
                            (item) => item.country_code === e.target.value
                          ).country
                        )
                      : setCountry("Select");

                    // setCountry("select")
                    set_select_country(e.target.value);
                    const find = countries.find(
                      (item) => item.country_code === e.target.value
                    );
                    setPrice(find.price + " " + find.currency);
                    set_old_price(find.old_price + " " + find.currency);
                    setCurrency(find.currency);
                    set_price_list(
                      find.price_list
                        .split(",")
                        .map((item) => item.split("").reverse().join(""))
                    );
                    setCities(City.getCitiesOfCountry(e.target.value));
                  }}
                  value={select_country}
                  className="border border-gray-300 rounded-sm p-2 outline-none"
                  onBlur={props.handleBlur("country")}
                >
                  <option>-Select-</option>
                  {countries.map((country) => {
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
                    {country}
                    <span className="text-red-500">*</span>
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
                  {cities.map((city) => {
                    return (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="fullName">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <p className="text-red-500 ">
                  { props.errors.fullName}
                </p>
              </div>
              <input
                type="text"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
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
                  <p className="text-red-500">
                    { props.errors.Mobile}
                  </p>
                </div>
             
              <input
                type="text"
                onChange={(e) => setMobile(e.target.value)}
                value={Mobile}
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
                onChange={(e) => setQuantitty(e.target.value)}
                value={quantity}
                className="border border-gray-300 rounded-sm p-2 outline-none"
              >
                <option>-Select-</option>
                {price_list.map((item, index) => {
                  return (
                    <option key={index} value={item + " " + currency}>
                      {item + " " + currency}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor="Color">
                  Color<span className="text-red-500">*</span>
                </label>
                <span className="text-red-600">
                  {props.touched.color && props.errors.color}
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
                  return (
                    <option key={index} value={item}>
                      {item}
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
