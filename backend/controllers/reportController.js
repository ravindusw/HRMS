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

export const getLeaveBalanceReport = (req, res) => {
  const { department, leaveType } = req.params;

  const query = `CALL GetLeaveBalance(?, ?)`;

  db.query(query, [department, leaveType], (err, results) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Error generating leave balance report" });
    }

    try {
      if (results.length === 0) {
        return res.status(404).json({ message: "No leave balance found" });
      }

      res.status(200).json(results[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error generating leave balance report" });
    }
  });
};

export const getLeaveReport = (req, res) => {
  const department = req.params.department;
  const query = "CALL GetLeaveReport(?)";

  db.query(query, [department], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error fetching leave report" });
    }
    try {
      if (results.length === 0) {
        return res.status(404).json({ message: "No leave found" });
      }

      res.status(200).json(results[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error generating leave report" });
    }
  });
};

export const getCustomFieldReport = (req, res) => {
  const query = "CALL GetCustomFieldReport()";

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ error: "Error generating custom field report" });
    }

    try {
      if (results.length === 0) {
        return res.status(404).json({ message: "No custom fields found" });
      }

      res.status(200).json(results[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error generating custom field report" });
    }
  });
};
