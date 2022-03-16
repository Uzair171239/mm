const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.get("/", (req, res) => {
    var selectData = "SELECT * FROM status";
    connection.query(selectData, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

module.exports = router;