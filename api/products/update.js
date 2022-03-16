const express = require("express");
const router = express.Router();
const connection = require("../connections");

router.patch("/", async (req, res) => {
  var {
    id,
    cattegory_name,
    google_cattegory,
    brand,
    purchase_price,
    code,
    title,
    status,
    price_list,
    price,
    old_price,
    description,
    color,
    size,
    delivery_charges,
    quantity,
    quantity_text,
    fake_order_sold,
    rank,
    available_in,
    pricing,
    image,
  } = req.body;

  var selectData = `UPDATE products SET cattegory_name='${cattegory_name}', google_cattegory='${google_cattegory}', brand='${brand}', purchase_price='${purchase_price}', code='${code}', title='${title}', status='${status}', price_list='${price_list}', price='${price}', old_price='${old_price}', description='${description}', color='${color}', size='${size}', delivery_charges='${delivery_charges}', quantity='${quantity}', quantity_text='${quantity_text}', fake_order_sold='${fake_order_sold}', rank='${rank}', image='${image}', available_in='${available_in}' where id='${id}'`;
  connection.query(selectData, (err, result) => {
    if (err) console.log(err);
    else {
      connection.query(`DELETE FROM pricing WHERE product_id='${id}'`);
      var query =
        "INSERT INTO `pricing`(`country_id`, `product_id`, `price`, `old_price`, `price_list`) VALUES  (?,?,?,?,?)";
      pricing.forEach((element) => {
        connection.query(
          query,
          [
            element.country_id,
            id,
            element.price,
            element.old_price,
            element.price_list,
          ],
          (err, result) => {
            if (err) console.log(err);
          }
        );
      });
      res.status(200).send("result");
    }
  });
});

module.exports = router;
