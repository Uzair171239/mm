const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.post("/", async (req, res) => {
    var {category_name, description} = req.body;
  var selectData = "INSERT INTO `categories`(`name`, `description`) VALUES (?,?)";
  connection.query(selectData, [category_name, description], (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});


module.exports = router;