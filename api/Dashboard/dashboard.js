const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.get("/dashboard", (req, res) => {
  var data = {};
  var selectData = "SELECT COUNT(*) as total_orders FROM orders";
  connection.query(selectData, (err, result) => {
    if (err) throw err;
    data = {
      ...data,
      total_orders: result[0].total_orders,
    };
  });

  var missing_orders = "SELECT COUNT(*) as missing_orders FROM missing_orders";
  connection.query(missing_orders, (err, result) => {
    if (err) throw err;
    data = {
      ...data,
      missing_orders: result[0].missing_orders,
    };
  });

  var total_products = "SELECT COUNT(*) as total_products FROM products";
  connection.query(total_products, (err, result) => {
    if (err) throw err;
    res.send(data = {
      ...data,
      total_products: result[0].total_products,
    });
  });
});

router.get("/todayorders", (req, res) => {
  var selectData = "SELECT GETDATE()";
  connection.query(selectData, (err, result) => {
    if (err) throw err;
    data = {
      ...data,
      total_orders: result[0].total_orders,
    };
  });
});

// router.get("/missingorders", (req, res) => {
//   var selectData = "SELECT COUNT(*) as missing_orders FROM missing_orders";
//   connection.query(selectData, (err, result) => {
//     if (err) throw err;
//     res.send(result[0]);
//   });
// });

// router.get("/totalproducts", (req, res) => {
//   var selectData = "SELECT COUNT(*) as total_products FROM products";
//   connection.query(selectData, (err, result) => {
//     if (err) throw err;
//     res.send(result[0]);
//   });
// });

module.exports = router;
