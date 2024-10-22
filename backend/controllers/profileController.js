import { db } from "../config/db.js";

export const getProfile = (req, res) => {
  const { id } = req.user;

  const query = `SELECT u.username, e.first_name, e.last_name, e.address, e.date_of_birth, e.email AS personal_email, e.hired_date, jt.title as job_title, d.name as Department
                 FROM user u 
                 JOIN employee e ON u.employee_id = e.employee_id 
                 LEFT JOIN job_title jt ON e.job_title_id = jt.job_title_id  
                 LEFT JOIN department d ON e.dept_id = d.dept_id
                 WHERE e.employee_id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error fetching profile data:", err);
      return res.status(500).send("Server error");
    }
    if (results.length === 0) {
      return res.status(404).send("Profile not found");
    }
    res.status(200).json(results[0]);
  });
};
