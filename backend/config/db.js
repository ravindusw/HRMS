import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "db-mysql-hrms-do-user-17987673-0.i.db.ondigitalocean.com",
  user: "doadmin",
  password: "AVNS_oGQvvIkkTUPm4xaSA_Z",
  database: "hrms",
  port: 25060,
  connectTimeout: 10000,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database.");
  }
});
