const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.patch("/", async (req, res) => {
  var { id, country, country_code, currency, with_vat, view_vat  } = req.body;
  var selectData =
    `UPDATE countries SET country='${country}', country_code='${country_code}' ,currency='${currency}', with_vat='${with_vat}', view_vat='${view_vat}' WHERE id='${id}'`;
  connection.query(
    selectData,
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

module.exports = router;
