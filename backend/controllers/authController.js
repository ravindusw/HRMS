import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../config/db.js";

export const login = (req, res) => {
  const { email, password } = req.body;
  const query = "CALL user_login(?)";

  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error during stored procedure call:", err);
      
      return res.status(500).send("Server error");
    }
    console.log("Stored procedure called");
    // console.log("Results:", results);

    if (results.length === 0) {
      
      return res.status(401).send("Invalid credentials");
    }

    const user = results[0][0].result;
    // console.log(user);

    const hashedPassword = user.password;
    // console.log(hashedPassword);

    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).send("Server error");
      }

      if (!isMatch) {
        logLoginAttempt(email, "Invalid credentials");
        return res.status(401).send("Invalid credentials");
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: user.employee_id, role: user.role },
        "your_jwt_secret_key",
        { expiresIn: "1h" }
      );
      // console.log(token);

      res.status(200).json({ token });
    });
  });
};

export const addUser = (req, res) => {
  const { employee_Id, userName, password, email } = req.body;
  const query = "CALL CreateUser(?, ?, ?, ?)";
  const password_hash = bcrypt.hashSync(password, 10);
  console.log(employee_Id);

  db.query(
    query,
    [employee_Id, userName, password_hash, email],
    (err, results) => {
      if (err) {
        console.error("Error during stored procedure call:", err);
        return res.status(500).send("Server error");
      }
      console.log("Stored procedure called");
      console.log("Results:", results);

      try {
        const result = results[0][0].result;
        if (result === "User created successfully") {
          return res.status(201).send(result);
        } else {
          return res.status(400).send(result);
        }
      } catch (error) {
        console.error("Error handling result:", error);
        return res.status(500).send("Server error");
      }
    }
  );
};
