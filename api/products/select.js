const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.get("/:isAdmin", async (req, res) => {
  const { isAdmin } = req.params;
  var selectData = isAdmin === "true" ? "SELECT * FROM products" : `SELECT *, products.id FROM products inner join pricing on products.id=pricing.product_id AND pricing.country_id=${isAdmin} where status ='1'`
  connection.query(selectData, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

router.post("/pricing", async (req, res) => {
  const {country_id, product_id} = req.body;
  let logic = `country_id='${country_id[0]}'`;
  if(country_id.length > 1) {
    for(let i = 1 ; i< country_id.length ; i++) {
      logic = logic + ` OR country_id='${country_id[i]}'`
    }
  }
  var selectData = `SELECT * from pricing where ((${logic}) AND product_id ='${product_id}')`
  connection.query(selectData, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});


module.exports = router;