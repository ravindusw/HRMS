import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();

export const login = (req, res) => {
  const { email, password } = req.body;
  const query = "CALL user_login(?)";

  db.query(query, [email], (err, results) => {
    if (err) {
      console.error("Error during stored procedure call:", err);
      // logLoginAttempt(email, "Server error");
      return res.status(500).send("Server error");
    }

    const user = results[0][0].result;
    const login_status = user.login_status;

    console.log(user.role);
    console.log(login_status);

    if (login_status === "Invalid credentials") {
      return res.status(401).send("Invalid credentials");
    }

    const hashedPassword = user.password;

    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).send("Server error");
      }

      if (!isMatch) {
        return res.status(401).send("Invalid credentials");
      }

      const token = jwt.sign(
        { e_id: user.employee_id, role: user.role, u_id: user.user_id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({ token });
    });
  });
};

export const addUser = (req, res) => {
  const { employee_Id, userName, password, email, role } = req.body;
  const query = "CALL CreateUser(?, ?, ?, ?,?)";
  const password_hash = bcrypt.hashSync(password, 10);

  // console.log(employee_Id);

  db.query(
    query,
    [employee_Id, userName, password_hash, email, role],
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

export const addEmployee = (req, res) => {
  console.log("came here");
  const {
    NIC,
    First_Name,
    Last_Name,
    Email,
    DOB,
    Gender,
    Address,
    Marital_Status,
    Department,
    Supervisor_ID,
    Job_Title,
    Pay_Grade,
    Employment_Type,
    Work_Schedule,
    Hired_Date,
    Termination_Date,
    Contact_Number,
    Emergency_Contact_Name,
    Emergency_Contact_Number,
    Emergency_Contact_Relationship,
    Dependant_Name,
    Dependant_Relationship,
    Dependant_DOB,
    Dependant_Gender,
    Dependent_Contact_Number,
  } = req.body;

  // Ensure that date fields are either valid or set to NULL
  const formatDate = (date) =>
    date ? new Date(date).toISOString().slice(0, 10) : null;

  const query = `
    CALL add_Employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;

  const values = [
    NIC,
    First_Name,
    Last_Name,
    Email,
    formatDate(DOB),
    Gender,
    Address,
    Marital_Status,
    Department,
    Supervisor_ID,
    Job_Title,
    Pay_Grade,
    Employment_Type,
    Work_Schedule,
    formatDate(Hired_Date),
    formatDate(Termination_Date),
    Contact_Number,
    Emergency_Contact_Name,
    Emergency_Contact_Number,
    Emergency_Contact_Relationship,
    Dependant_Name,
    Dependant_Relationship,
    formatDate(Dependant_DOB),
    Dependant_Gender,
    Dependent_Contact_Number,
  ];
  console.log(values);

  db.query(query, values, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Database error", details: error });
    }
    res.status(200).json({ message: "Employee added successfully!" });
  });
};
