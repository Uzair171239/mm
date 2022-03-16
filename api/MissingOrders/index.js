const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.get("/", async (req, res) => {
  var selectData =
    "SELECT *, products.title FROM missing_orders inner join products on missing_orders.product_id = products.id";
  connection.query(selectData, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

router.delete("/:id", async (req, res) => {
  var { id } = req.params;
  var selectData = "DELETE FROM `missing_orders` where id = ?";
  connection.query(selectData, [id], (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

module.exports = router;
