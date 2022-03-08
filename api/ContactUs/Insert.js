const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.post("/", async (req, res) => {
    var { country_name, address, facebook, instagram, email, whatsapp } = req.body;
  var selectData = "INSERT INTO `contact`(`country_name`, `address`, `facebook`, `instagram`, `email`, `whatsapp`) VALUES (?,?,?,?,?,?)";
  connection.query(selectData, [country_name, address, facebook, instagram, email, whatsapp ], (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});


module.exports = router;