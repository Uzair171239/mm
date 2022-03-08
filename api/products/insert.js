const express = require("express");
const router = express.Router();
const multer = require("multer");
const connection = require("../connections");

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./images/products");
  },
  filename: (req, file, callBack) => {
    callBack(null, file.originalname);
  },
});

var upload = multer({
  storage: storage,
});

router.post("/productImage", upload.single("file"), (req, res) => {
  if (!req.file) res.send("No file uploaded");
  else res.send("file uploaded");
});

router.post("/", async (req, res) => {
  var {
    cattegory_name,
    google_cattegory,
    brand,
    purchase_price,
    code,
    title,
    status,
    price_list,
    price,
    old_price,
    description,
    color,
    size,
    delivery_charges,
    quantity,
    quantity_text,
    fake_order_sold,
    rank,
    available_in,
    pricing,
    image,
  } = req.body;

  var imgsrc = "/images/products/" + image;
  var selectData =
    "INSERT INTO `products`(`cattegory_name`, `google_cattegory`, `brand`, `purchase_price`, `code`, `title`, `status`, `price_list`, `price`, `old_price`, `description`, `color`, `size`, `delivery_charges`, `quantity`, `quantity_text`, `fake_order_sold`, `rank`, `image`, `available_in`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  connection.query(
    selectData,
    [
      cattegory_name,
      google_cattegory,
      brand,
      purchase_price,
      code,
      title,
      status,
      price_list,
      price,
      old_price,
      description,
      color,
      size,
      delivery_charges,
      quantity,
      quantity_text,
      fake_order_sold,
      rank,
      imgsrc,
      available_in,
    ],
    (err, result) => {
      if (err) res.send(err);
      var query =
        "INSERT INTO `pricing`(`country_id`, `product_id`, `price`, `old_price`, `price_list`) VALUES  (?,?,?,?,?)";
      pricing.forEach((element) => {
        connection.query(
          query,
          [
            element.country_id,
            result.insertId,
            element.price,
            element.old_price,
            element.price_list,
          ],
          (err, result) => {
            if (err) res.send(err);
            res.send(result);
          }
        );
      });
    }
  );
});

module.exports = router;
