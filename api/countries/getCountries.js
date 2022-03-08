const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.post("/", (req, res) => {
  const {country_id, product_id} = req.body;
  let logic = `country_id='${country_id[0]}'`;
  if(country_id.length > 1) {
    for(let i = 1 ; i< country_id.length ; i++) {
      logic = logic + ` OR country_id='${country_id[i]}'`
    }
  }
  var selectData = `SELECT countries.id, pricing.price, pricing.old_price, pricing.price_list, countries.country, countries.country_code, countries.currency, countries.with_vat, countries.view_vat FROM pricing INNER JOIN countries on pricing.country_id=countries.id where ((${logic}) AND product_id ='${product_id}')`
  connection.query(selectData, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});
router.get("/", (req, res) => {
  var selectData = `SELECT * FROM countries`
  connection.query(selectData, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

module.exports = router;