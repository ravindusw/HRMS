import { db } from "../config/db.js";

export const login = (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = ? AND password_hash = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error during login:", err);
      return res.status(500).send("Server error");
    }
    if (results.length === 0) {
      return res.status(401).send("Invalid credentials");
    }
    res.status(200).json({ employee_id: results[0].employee_id });
  });
};
