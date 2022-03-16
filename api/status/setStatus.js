const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.post("/", async (req, res) => {
    var { status, description, color } = req.body;
  var selectData = "INSERT INTO `status`(`status`, `description`, `color`) VALUES (?,?,?)";
  connection.query(selectData, [status, description, color], (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});


module.exports = router;