const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "bubanc-db.cftmikqotsnx.us-east-2.rds.amazonaws.com",
  user: "owenkdev",
  password: "wjqthr5",
  database: "lawyerbanc",
  connectionLimit: 20,
});

module.exports = {
  pool,
};
