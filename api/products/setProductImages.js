const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const multer = require("multer");
const connection = require("../connections");

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./images/products");
    },
    filename: (req, file, callBack) => {
      console.log(file)
      callBack(null, file.originalname);
    },
  });
  
  var upload = multer({
    storage: storage,
  });
  

  router.post("/:id", upload.array('files'), (req, res) => {
    const {id} = req.params;
    if (!req.files) {
      console.log("No file upload");
    } else {
      var insertData = "INSERT INTO image(product_id, image)VALUES(?,?)";
      connection.query(insertData, [id, "/images/products/"+req.files[0].originalname], (err, result) => {
        if (err) throw err;
        console.log("file uploaded");
        res.send("done");
      });
    }
  });
  router.delete("/:id", (req, res) => {
    const {id} = req.params;
    connection.query("DELETE FROM image WHERE product_id=?", [id], (err, result) => {
      if (err) throw err;
      console.log("file deleted");
      res.send("done");
    }); 
  });
  module.exports = router;