const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "DangDB",
});

connection.connect();
connection.query(`select * from tasks`, (error, results, fields) => {
  if (error) {
    return console.log(error);
  }
  return console.log(results);
});
connection.end();
