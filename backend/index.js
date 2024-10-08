import express from "express";
import cors from "cors";
import mysql from "mysql2";

// Import all routes here
import notificationRouter from "./src/routes/notification.js";
import getemployeesForEIMRouter from "./src/routes/getemployeesForEIM.js";
import loginRouter from "./src/routes/login.js";
import profileRouter from "./src/routes/profile.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Create and export MySQL connection
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "222336699",
  database: "db4_all",
});

// Use all routes here
app.use(notificationRouter);
app.use(getemployeesForEIMRouter);

app.get('/', (req, res) => {
    res.send('<h1>Hello, This is backend!<h1>');
    console.log('Backend server is running...');
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database.");
  }
});

// Use the login route
app.use("/login", loginRouter);

// //Profile Route
// app.use("/profile/:employee_id", profileRouter);

// Start the server
app.listen(8800, () => {
  console.log("Backend server is listening...");
});

app.get("/profile/:employee_id", (req, res) => {
  const { employee_id } = req.params;
  const query = `SELECT  u.username,e.first_name, e.last_name, e.address, e.date_of_birth, e.email AS personal_email, e.hired_date, jt.title as job_title, d.name as Department
        FROM users u JOIN employees e ON u.employee_id = e.employee_id LEFT JOIN job_title jt ON e.job_title_id = jt.job_title_id  LEFT JOIN    department d ON e.dept_id = d.dept_id
        WHERE e.employee_id = ?`;
  db.query(query, [employee_id], (err, results) => {
    if (err) {
      console.error("Error fetching profile data:", err);
      return res.status(500).send("Server error");
    }
    if (results.length === 0) {
      return res.status(404).send("Profile not found");
    }
    res.status(200).json(results[0]);
  });
});
