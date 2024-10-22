import { db } from "../config/db.js";

export const getSupervisors = (req, res) => {
  const query = `CALL GetSupervisors()`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching supervisors:", err);
      return res.status(500).send("Server error");
    }

    // Check if there are any results
    if (!results[0] || !results[0][0]) {
      return res.status(404).json({ message: "No supervisors found." });
    }

    const supervisors = results[0][0].supervisors;

    // Check the type of supervisors and respond accordingly
    if (Array.isArray(supervisors)) {
      res.status(200).json(supervisors); // Send the array directly
    } else {
      // Handle unexpected format
      res
        .status(500)
        .json({ message: "Unexpected format for supervisors data." });
    }
  });
};

export const getemployeeleavedetail = (req, res) => {
  // Extract the employee_id from request parameters (or query if needed)
  const { employee_id } = req.params; // You can also use req.query if passed via URL query
  
  if (!employee_id) {
    return res.status(400).json({ message: "Employee ID is required" });
  }

  // SQL query to call the stored procedure with a parameter
  const query = `CALL GetLeaveDetails(?);`;

  // Execute the query with the employee_id as the parameter
  db.query(query, [employee_id], (err, results) => {
    if (err) {
      console.error("Error fetching employee leave detail:", err);
      return res.status(500).send("Server error");
    }

    // Check if there are any results
    if (!results[0] || !results[0][0]) {
      return res.status(404).json({ message: "No employee leave detail found." });
    }

    const employeeleavedetail = results[0]; // Stored procedure should return leave details directly

    // Check the format and respond accordingly
    if (Array.isArray(employeeleavedetail)) {
      res.status(200).json(employeeleavedetail); // Send the array of leave details directly
    } else {
      // Handle unexpected format
      res.status(500).json({ message: "Unexpected format for employee leave detail data." });
    }
  });
};
