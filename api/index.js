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

app.get("/api/images/:cattegory/:image", (req, res) => {
  var { cattegory, image } = req.params;
  res.sendFile(path.join(__dirname, `./images/${cattegory}/${image}`));
});

// app.delete("/images/:id", (req, res) => {
//   const { id } = req.params;
//   fs.unlink('./images/products/'+ );
// })

app.use("/api/", Dashboard);
app.use("/api/admin", Admin);

app.use("/api/product_images", getProductImages);
app.use("/api/products", Select);
app.use("/api/products", Insert_Product);
app.use("/api/products", Update_Product);
app.use("/api/products", DeleteProduct);
app.use("/api/productImages", ProductImages);

app.use("/api/orders", selectOrders);
app.use("/api/orders", setOrder);
app.use("/api/orders", UpdateOrder);
app.use("/api/orders", DeleteOrder);

app.use("/api/category", GetCategories);
app.use("/api/category", SetCategories);
app.use("/api/category", UpdateCategories);
app.use("/api/category", DeleteCategories);

app.use("/api/countries", getCountries);
app.use("/api/countries", setCountries);
app.use("/api/countries", UpdateCountry);
app.use("/api/countries", DeleteCountry);

app.use("/api/status", getStatus);
app.use("/api/status", set_status);
app.use("/api/status", UpdateStatus);
app.use("/api/status", DeleteStatus);

app.use("/api/contacts", GetContacts);
app.use("/api/contacts", SetContact);
app.use("/api/contacts", UpdateContact);
app.use("/api/contacts", DeleteContact);

app.use("/api/missingorders", MISSING_ORDERS);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
