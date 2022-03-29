const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "ashop",
    user: "mansoor",
    password: "mans00r",
  });
  connection.connect(function (err) {
    if (err) {
      // mysqlErrorHandling(connection, err);
      console.log(
        "\n\t *** Cannot establish a connection with the database. ***",err
      );
  
      // connection = reconnect(connection);
    } else {
      console.log("\n\t *** New connection established with the database. ***");
    }
  });

  module.exports = connection;