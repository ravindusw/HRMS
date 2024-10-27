import { db } from "../config/db.js";


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

export const getpendingleavedetail = (req, res) => {
  const { e_id } = req.user;
  // SQL query to call the stored procedure
  const query = `CALL get_pending_leaves(?);`;

  // Execute the query

  db.query(query,[e_id] ,(err, results) => {
    if(err){
      console.error("Error fetching pending leave detail:", err);
      return res.status(500).send("Server error");
    }
    if(!results[0] || !results[0][0]){
      return res.status(404).json({ message: "No pending leave detail found." });
    }
    const pendingleavedetail = results[0]; // Stored procedure should return pending leave details directly

    if (Array.isArray(pendingleavedetail)) {
      res.status(200).json(pendingleavedetail); // Send the array of pending leave details directly
    } else {
      // Handle unexpected format
      res.status(500).json({ message: "Unexpected format for pending leave detail data." });
    }
  });
}


export const approveleaverequest = (req, res) => {
  const { leave_record_id } = req.params;
  if (!leave_record_id) {
    return res.status(400).json({ message: "Leave Record ID is required" });
  }
  const approved_date = new Date().toISOString().split('T')[0];
  const query = `CALL approve_leave_record(?, ?);`;
  
  db.query(query, [leave_record_id, approved_date], (err, results) => {
    if (err) {
      console.error("Error approving leave request:", err);
      return res.status(500).send("Server error");
    }

    res.status(200).json({ message: "Leave request approved successfully" ,data: results});
  });
}

export const getLeaveTypes = (req, res) => {
  const query = `CALL get_leave_types();`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching leave types:", err);
      return res.status(500).send("Server error");
    }

    res.status(200).json(results[0]);
  });
};

export const applyLeave = (req, res) => {
  const { leave_type_id, start_date, end_date, reason } = req.body;
  const { e_id } = req.user;
  const applied_date = new Date().toISOString().split('T')[0];
  console.log(applied_date);

  if (!leave_type_id || !start_date || !end_date || !reason) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = `CALL insert_leave_record(?, ?, ?, ?, ?);`;

  db.query(query, [e_id, leave_type_id, start_date, end_date, applied_date], (err, results) => {
    if (err) {
      console.error("Error applying for leave:", err);
      return res.status(500).send("Server error");
    }
    console.log(results);
    res.status(200).json({ message: "Leave application submitted successfully"});
  });
};

export const getLeaveHistory = (req, res) => { 
  const { e_id } = req.user;
  const query = `CALL GetLeaveDetails(?);`;

  db.query(query, [e_id], (err, results) => {
    if (err) {
      console.error("Error fetching leave history:", err);
      return res.status(500).send("Server error");
    }
    if (!results[0] || !results[0][0]) {
      return res.status(404).json({ message: "No leave history found." });
    }

    const leaveHistory = results[0]; // Stored procedure should return leave history directly
    if (Array.isArray(leaveHistory)) {
      res.status(200).json(leaveHistory); // Send the array of leave history directly
    } else {
      // Handle unexpected format
      res.status(500).json({ message: "Unexpected format for leave history data." });
    }
  });
}