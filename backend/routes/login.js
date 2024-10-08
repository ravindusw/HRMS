// import { Router } from "express";
// import handleConnection from "../db.js"; // Adjust path as necessary

// const router = Router();
// const Database = handleConnection(); // Get the shared database connection

// router.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).send("Email and password are required");
//   }

//   const query =
//     "SELECT user_id, employee_id, password_hash FROM users WHERE Company_email = ?";

//   Database.query(query, [email], (err, results) => {
//     if (err) {
//       console.error("Error executing query:", err);
//       return res.status(500).send("Server error");
//     }

//     if (results.length === 0) {
//       return res.status(401).send("Invalid email or password");
//     }

//     const user = results[0];

//     // Check if the provided password matches the stored password_hash
//     if (user.password_hash !== password) {
//       return res.status(401).send("Invalid email or password");
//     }

//     // Login successful, send the user_id back to the frontend
//     return res.status(200).json({ user_id: user.user_id });
//   });
// });

// import { Router } from "express";
// import { db } from "../server.js";

// const router = Router();

// router.post("/", (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).send("Email and password are required");
//   }

//   const query =
//     "SELECT user_id, employee_id, password_hash FROM users WHERE email = ?";

//   // Use the db connection directly
//   db.query(query, [email], (err, results) => {
//     if (err) {
//       console.error("Error executing query:", err);
//       return res.status(500).send("Server error");
//     }

//     if (results.length === 0) {
//       return res.status(401).send("Invalid email or password");
//     }

//     const user = results[0];
//     if (user.password_hash !== password) {
//       return res.status(401).send("Invalid email or password");
//     }

//     return res.status(200).json({ employee_id: user.employee_id });
//   });
// });

// export default router;
