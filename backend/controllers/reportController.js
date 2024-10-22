import { db } from "../config/db.js";

// export const EmployeeReport = (req, res) => {
//   const query = `SELECT e.employee_id, e.first_name, e.last_name, e.email, e.phone, e.address, e.date_of_birth, e.hired_date, jt.title as job_title, d.name as department
//                    FROM employees e
//                    LEFT JOIN job_title jt ON e.job_title_id = jt.job_title_id
//                    LEFT JOIN department d ON e.dept_id = d.dept_id`;

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error("Error fetching employee report data:", err);
//       return res.status(500).send("Server error");
//     }
//     res.status(200).json(results);
//   });
// };
exports.getEmployeeReport = async (req, res) => {
  try {
    const Employee = await db.query("CALL GetEmployeeList()");

    res.status(200).json(employees[0]);
  } catch (error) {
    res.status(500).json({ error: "Error generating employee report" });
  }
};

exports.getLeaveReport = async (req, res) => {
  try {
    //   const query = `
    //     SELECT e.first_name, e.last_name, lt.type AS leave_type, lr.start_date, lr.end_date, lr.status
    //     FROM leave_record lr
    //     JOIN employee e ON lr.employee_id = e.employee_id
    //     JOIN leave_type lt ON lr.leave_type_id = lt.leave_type_id;
    //   `;
    const leaveRecords = await db.query("CALL GetLeaveReport()");
    res.status(200).json(leaveRecords);
  } catch (error) {
    res.status(500).json({ error: "Error generating leave report" });
  }
};

exports.getSalaryReport = async (req, res) => {
  try {
    //   const query = `
    //     SELECT e.first_name, e.last_name, d.name AS department, jt.title AS job_title, pg.name AS pay_grade
    //     FROM employee e
    //     JOIN department d ON e.dept_id = d.dept_id
    //     JOIN job_title jt ON e.job_title_id = jt.job_title_id
    //     JOIN pay_grade pg ON e.pay_grade_id = pg.pay_grade_id;
    //   `;
    const salaries = await db.query("CALL GetSalaryReport()");
    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({ error: "Error generating salary report" });
  }
};

exports.getCustomFieldsReport = async (req, res) => {
  try {
    //   const query = `
    //     SELECT e.first_name, e.last_name, ca.key1, ca.value1, ca.key2, ca.value2, ca.key3, ca.value3
    //     FROM custom_attribute ca
    //     JOIN employee e ON ca.employee_id = e.employee_id;
    //   `;
    const customFieldsReport = await db.query("CALL GetCustomFieldsReport()");
    res.status(200).json(customFieldsReport);
  } catch (error) {
    res.status(500).json({ error: "Error generating custom fields report" });
  }
};
