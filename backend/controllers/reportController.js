import { db } from "../config/db.js";
export const getEmployeeReport = (req, res) => {
  const department = req.params.department;

  const query = "CALL GetEmployeeReport(?)";

  db.query(query, [department], (err, results) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Error generating employee report" });
    }

    try {
      if (results.length === 0) {
        return res.status(404).json({ message: "No employees found" });
      }

      res.status(200).json(results[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error generating employee report" });
    }
  });
};

const getLeaveBalanceReport = (req, res) => {
  const { department, leaveType } = req.params;

  const query = `CALL GetLeaveBalance(?, ?)`;

  db.query(query, [department, leaveType], (error, results) => {
    if (error) {
      console.error("Error fetching leave balance:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results[0]); // Return the result of the stored procedure
  });
};

module.exports = {
  getLeaveBalanceReport,
};
