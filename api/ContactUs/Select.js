const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.get("/", async (req, res) => {
    var selectData = "SELECT * FROM contact";
  connection.query(selectData, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

module.exports = router;