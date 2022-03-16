const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.patch("/", async (req, res) => {
    var { id, status, description, color } = req.body;
  var selectData =
    `UPDATE status SET status='${status}', description='${description}',color='${color}' WHERE id='${id}'`;
  connection.query(
    selectData,
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

module.exports = router;
