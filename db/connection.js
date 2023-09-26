const mysql = require("mysql2");

const connection = mysql.createConnection(process.env.MYSQLURI);

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;