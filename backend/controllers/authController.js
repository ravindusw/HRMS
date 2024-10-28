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

    if (results.length === 0) {
      return res.status(401).send("Invalid credentials");
    }

    const hashedPassword = user.password;

    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return res.status(500).send("user not found!");
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
    Job_Title_ID,
    Pay_Grade,
    Employment_Type,
    Work_Schedule,
    Hired_Date,
    Termination_Date,
    Contact_Number1,
    Contact_Number2,
    Emergency_Contact_Name,
    Emergency_Contact_Number,
    Emergency_Contact_Relationship,
    Dependant_Name,
    Dependant_Relationship,
    Dependant_DOB,
    Dependant_Gender,
    Dependent_Contact_Number,
  } = req.body;

  const formatDate = (date) =>
    date ? new Date(date).toISOString().slice(0, 10) : null;

  const makeNullIfEmpty = (value) => (value === "" ? null : value);

  const query = `
    CALL add_Employee(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?);
  `;

  const values = [
    makeNullIfEmpty(NIC),
    makeNullIfEmpty(First_Name),
    makeNullIfEmpty(Last_Name),
    makeNullIfEmpty(Email),
    formatDate(makeNullIfEmpty(DOB)),
    makeNullIfEmpty(Gender),
    makeNullIfEmpty(Address),
    makeNullIfEmpty(Marital_Status),
    makeNullIfEmpty(Department),
    makeNullIfEmpty(Supervisor_ID),
    makeNullIfEmpty(Job_Title_ID),
    makeNullIfEmpty(Pay_Grade),
    makeNullIfEmpty(Employment_Type),
    makeNullIfEmpty(Work_Schedule),
    formatDate(makeNullIfEmpty(Hired_Date)),
    formatDate(makeNullIfEmpty(Termination_Date)),
    makeNullIfEmpty(Contact_Number1),
    makeNullIfEmpty(Contact_Number2),
    makeNullIfEmpty(Emergency_Contact_Name),
    makeNullIfEmpty(Emergency_Contact_Number),
    makeNullIfEmpty(Emergency_Contact_Relationship),
    makeNullIfEmpty(Dependant_Name),
    makeNullIfEmpty(Dependant_Relationship),
    formatDate(makeNullIfEmpty(Dependant_DOB)),
    makeNullIfEmpty(Dependant_Gender),
    makeNullIfEmpty(Dependent_Contact_Number),
  ];
  console.log(req.body);

  db.query(query, values, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Database error", details: error });
    }
    res.status(200).json({ message: "Employee added successfully!" });
  });
};
