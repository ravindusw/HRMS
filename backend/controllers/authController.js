import { db } from "../config/db.js";

export const login = (req, res) => {
  const { email, password } = req.body;
  const query = "CALL UserLogin(?, ?)";

  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error during stored procedure call:", err);
      return res.status(500).send("Server error");
    }
    console.log("Stored procedure called");
    console.log("Results:", results);

    try {
      const result = results[0][0].result;
      const { employee_id, login_status } = result;
      console.log(employee_id, login_status);

      if (login_status === "Invalid credentials") {
        return res.status(401).send(login_status);
      }

      res.status(200).json({ employee_id });
    } catch (error) {
      console.error("Error handling result:", error);
      return res.status(500).send("Server error");
    }
  });
};

export const createUser = (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  const query = "CALL CreateUser(?, ?, ?, ?)";

  db.query(query, [email, password, firstName, lastName], (err, results) => {
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
  });
};
