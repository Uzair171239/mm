const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.delete("/:id", async (req, res) => {
  var { id } = req.params;
  console.log(id)
  var selectData = `DELETE FROM products WHERE id='${id}'`;
  connection.query(selectData, (err, result) => {
    if (err) console.log(err);
    connection.query( `DELETE FROM pricing WHERE product_id='${id}'`)
    res.send(result);
  });
});


module.exports = router;