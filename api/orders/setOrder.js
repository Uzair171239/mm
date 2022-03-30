const express = require("express");
const router = express.Router();
const connection = require("../connections");

const placeOrder = (orderProduct, res) => {
  let order =
    "INSERT INTO `orders`(`client_id`, `product_id`, `quantity`, `amount`, `delivery_charges`, `quantity_text`, `color`, `status`) VALUES (?,?,?,?,?,?,?,?)";
  connection.query(order, orderProduct, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

router.post("/", async (req, res) => {
    var { fullName, whatsapp, phone_number, deliveryAddress, country, city } = req.body;
    const { id, quantity, delivery_charges, quantity_text, color, status } =
      req.body;
    const [quan, amount] = quantity.split(":");
    var client_id;
    var selectData = `SELECT * FROM users WHERE phone_number = '${Number(whatsapp)}' OR whatsapp = '${Number(whatsapp)}' OR phone_number = '${Number(phone_number)}' OR whatsapp = '${Number(phone_number)}' `;
    connection.query(selectData, (err, result) => {
      if (err) throw err;
      else if (result[0]) {
        client_id = result[0].id;
        placeOrder(
          [
            client_id,
            id,
            quan,
            amount,
            delivery_charges,
            quantity_text,
            color,
            status,
          ],
          res
        );
      } else {
        var user =
          "INSERT INTO `users`(`full_name`, `phone_number`, `address`, `country`, `city`, `whatsapp`) VALUES (?,?,?,?,?,?)";
        connection.query(
          user,
          [fullName, phone_number, deliveryAddress, country, city, whatsapp],
          (err, result) => {
            if (err) return err;
            else {
              client_id = result.insertId;
              placeOrder(
                [
                  client_id,
                  id,
                  quan,
                  amount,
                  delivery_charges,
                  quantity_text,
                  color,
                  status,
                ],
                res
              );
            }
          }
        );
      }
    });
});


router.post("/missing_orders", async (req, res) => {
    var { id , client_name, whatsapp, quantity} = req.body;
    const [quan, amount] = quantity !== "--Select--" ? quantity.split(":")  : [0,0];
    var query =
          "INSERT INTO `missing_orders`(`product_id`, `client_name`, `phone_number`, `quantity`, `amount`) VALUES (?,?,?,?,?)";
        connection.query(
          query,
          [id , client_name, whatsapp, quan, amount],
          (err, result) => {
            if (err) return err;
            res.send("done")
          }
        );
});

module.exports = router;
