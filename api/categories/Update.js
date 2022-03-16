const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.patch("/", async (req, res) => {
  var { id, category_name, description} = req.body;
  var selectData =
    `UPDATE categories SET name='${category_name}', description='${description}' WHERE id='${id}'`;
  connection.query(
    selectData,
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

module.exports = router;
