const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.post("/", async (req, res) => {
    var { country, country_code, currency, with_vat, view_vat } = req.body;
  var selectData = "INSERT INTO `countries`(`country`, `country_code`, `currency`, `with_vat`, `view_vat`) VALUES (?,?,?,?,?)";
  connection.query(selectData, [country, country_code, currency, with_vat, view_vat], (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});


module.exports = router;