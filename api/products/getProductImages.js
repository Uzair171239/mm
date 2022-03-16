const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.get("/:id", (req, res) => {
    var { id } = req.params;
    var selectData = "SELECT * FROM image WHERE product_id = ?";
    connection.query(selectData, [Number(id)], (err, result) => {
      if (err) throw err;
      res.send(result);
    });
});


module.exports = router;