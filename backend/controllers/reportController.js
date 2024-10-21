import { db } from "../config/db.js";

export const EmployeeReport = (req, res) => {
  const query = `SELECT e.employee_id, e.first_name, e.last_name, e.email, e.phone, e.address, e.date_of_birth, e.hired_date, jt.title as job_title, d.name as department
                   FROM employees e
                   LEFT JOIN job_title jt ON e.job_title_id = jt.job_title_id
                   LEFT JOIN department d ON e.dept_id = d.dept_id`;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching employee report data:", err);
      return res.status(500).send("Server error");
    }
    res.status(200).json(results);
  });
};

export const LeaveReport = (req, res) => {};

export const SalaryReport = (req, res) => {};

export const CustomFieldsReport = (req, res) => {};
