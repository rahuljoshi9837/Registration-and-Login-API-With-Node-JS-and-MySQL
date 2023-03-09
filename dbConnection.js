const mysql = require("mysql2");
const env = require("dotenv");
env.config();

const db_connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
  });

  db_connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database !");
  });

module.exports = db_connection;