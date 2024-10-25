import { db } from "../config/db.js";
export const getEmployeeReport = (req, res) => {
  const department = req.params.department;

  const query = "CALL GetEmployeeReport(?)";

  db.query(query, [department], (err, results) => {
    
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error generating employee report" });
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

// exports.getSalaryReport = async (req, res) => {
//   try {
//     const query = `
//         SELECT e.first_name, e.last_name, d.name AS department, jt.title AS job_title, pg.name AS pay_grade
//         FROM employee e
//         JOIN department d ON e.dept_id = d.dept_id
//         JOIN job_title jt ON e.job_title_id = jt.job_title_id
//         JOIN pay_grade pg ON e.pay_grade_id = pg.pay_grade_id;
//       `;
//     const salaries = await db.query("CALL GetSalaryReport()");
//     res.status(200).json(salaries);
//   } catch (error) {
//     res.status(500).json({ error: "Error generating salary report" });
//   }
// };
