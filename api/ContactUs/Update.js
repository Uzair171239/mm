const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.patch("/", async (req, res) => {
    var { id, country_name, address, facebook, instagram , email, whatsapp} = req.body;
  var selectData =
    `UPDATE contact SET country_name='${country_name}', whatsapp='${whatsapp}', address='${address}', facebook='${facebook}', instagram='${instagram}', email='${email}' WHERE id='${id}'`;
  connection.query(
    selectData,
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

module.exports = router;
