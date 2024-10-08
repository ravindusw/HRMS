import express from "express";
import cors from "cors";
import { db } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/ProfileRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import all routes here
// import notificationRouter from "./routes/notification.js";
// import getemployeesForEIMRouter from "./routes/getemployeesForEIM.js";
// import loginRouter from "./routes/login.js";
// import profileRouter from "./routes/profile.js";

// Use the login route
// app.use("/login", loginRouter);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

// //Profile Route
// app.use("/profile/:employee_id", profileRouter);

// Start the server

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling middleware
// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error stack:", err.stack);
  console.error("Error message:", err.message);
  res.status(500).send("Something broke!");
});

// app.get("/profile/:employee_id", (req, res) => {
//   const { employee_id } = req.params;
//   const query = `SELECT  u.username,e.first_name, e.last_name, e.address, e.date_of_birth, e.email AS personal_email, e.hired_date, jt.title as job_title, d.name as Department
//         FROM users u JOIN employees e ON u.employee_id = e.employee_id LEFT JOIN job_title jt ON e.job_title_id = jt.job_title_id  LEFT JOIN    department d ON e.dept_id = d.dept_id
//         WHERE e.employee_id = ?`;
//   db.query(query, [employee_id], (err, results) => {
//     if (err) {
//       console.error("Error fetching profile data:", err);
//       return res.status(500).send("Server error");
//     }
//     if (results.length === 0) {
//       return res.status(404).send("Profile not found");
//     }
//     res.status(200).json(results[0]);
//   });
// });
