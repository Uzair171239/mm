const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.get("/", async (req, res) => {
  var selectData =
    "SELECT *, status.id as status_id, status.status from orders INNER JOIN users ON orders.client_id=users.id INNER JOIN products ON orders.product_id=products.id INNER JOIN status ON orders.status=status.id";
  connection.query(selectData, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

module.exports = router;
