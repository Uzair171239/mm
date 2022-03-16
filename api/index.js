const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connection = require("./connections.js");
const Select = require("./products/select");
const DeleteProduct = require("./products/delete");
const selectOrders = require("./orders/selectOrders");
const setOrder = require("./orders/setOrder");
const UpdateOrder = require("./orders/UpdateOrders");
const DeleteOrder = require("./orders/DeleteOrders");

const getCountries = require("./countries/getCountries");
const setCountries = require("./countries/setCountries");
const UpdateCountry = require("./countries/UpdateCountries");
const DeleteCountry = require("./countries/deleteCountry");
const getProductImages = require("./products/getProductImages");

const getStatus = require("./status/getStatus");
const set_status = require("./status/setStatus");
const UpdateStatus = require("./status/UpdateStatus");
const DeleteStatus = require("./status/DeleteStatus");

const Dashboard = require("./Dashboard/dashboard");
const ProductImages = require("./products/setProductImages");
const Insert_Product = require("./products/insert");
const Update_Product = require("./products/update");

const GetContacts = require("./ContactUs/Select");
const SetContact = require("./ContactUs/Insert");
const UpdateContact = require("./ContactUs/Update");
const DeleteContact = require("./ContactUs/Delete");

const GetCategories = require("./categories/Select");
const SetCategories = require("./categories/Insert");
const UpdateCategories = require("./categories/Update");
const DeleteCategories = require("./categories/Delete");

const Admin = require("./admin/index");
const MISSING_ORDERS = require("./MissingOrders/index");

var fs = require("fs");

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "./build")));

app.get("/images/:cattegory/:image", (req, res) => {
  var { cattegory, image } = req.params;
  res.sendFile(path.join(__dirname, `./images/${cattegory}/${image}`));
});

// app.delete("/images/:id", (req, res) => {
//   const { id } = req.params;
//   fs.unlink('./images/products/'+ );
// })

app.use("/", Dashboard);
app.use("/admin", Admin);

app.use("/product_images", getProductImages);
app.use("/products", Select);
app.use("/products", Insert_Product);
app.use("/products", Update_Product);
app.use("/products", DeleteProduct);
app.use("/productImages", ProductImages);

app.use("/orders", selectOrders);
app.use("/orders", setOrder);
app.use("/orders", UpdateOrder);
app.use("/orders", DeleteOrder);

app.use("/category", GetCategories);
app.use("/category", SetCategories);
app.use("/category", UpdateCategories);
app.use("/category", DeleteCategories);

app.use("/countries", getCountries);
app.use("/countries", setCountries);
app.use("/countries", UpdateCountry);
app.use("/countries", DeleteCountry);

app.use("/status", getStatus);
app.use("/status", set_status);
app.use("/status", UpdateStatus);
app.use("/status", DeleteStatus);

app.use("/contacts", GetContacts);
app.use("/contacts", SetContact);
app.use("/contacts", UpdateContact);
app.use("/contacts", DeleteContact);

app.use("/missingorders", MISSING_ORDERS);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
