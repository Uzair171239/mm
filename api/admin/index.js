const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const connection = require("../connections");

router.post("/login", async (req, res) => {
    var { username } = req.body;
    var selectData = "SELECT * FROM admin where user_name = '" + username + "'";
    connection.query(selectData, async (err, result) => {
      if (err) throw err;
      if(result.length > 0){
        const {id, password} = result[0];
        const isMatch = await bcrypt.compare(req.body.password, password)
            if(isMatch) {
                const token = jwt.sign(
                    { user_id: id},
                    "ecommerceapplicationforabcdjhwsedvch",
                );
                res.send({
                    ...result[0],
                    token
                });
             }
            else 
                res.send("user name or password is incorrect")
        
    }
    else {
        res.send("user name or password is incorrect")
    }
    });
});

router.patch("/changepassword", async (req, res) => {
    var { user_name, password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash_password  = await bcrypt.hash(password, salt);
    var selectData =
      `UPDATE admin SET password='${hash_password}' WHERE user_name='${user_name}'`;
    connection.query(
      selectData,
      (err, result) => {
        if (err) res.send(err);
        if(result.affectedRows > 0) res.send("user updated successfully");
        else res.send("user not found")
      }
    );
  });

module.exports = router;