const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.patch("/", async (req, res) => {
  var { id, prod_id, name, mobile, address, city, status } = req.body;
  let prod_status = `UPDATE orders SET status="${status}" WHERE product_id="${prod_id}" AND client_id="${id}"`;
  connection.query(prod_status, (err, result) => {
    if (err) console.log(err);
    let selectData = `UPDATE users SET full_name='${name}', phone='${mobile}', address='${address}', city='${city}' WHERE id='${id}'`;
    connection.query(selectData, (err, result) => {
      if (err) console.log(err);
      res.send(result);
    });
  });
});

module.exports = router;
