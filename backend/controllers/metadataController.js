import { db } from '../config/db.js';

// Function to get job titles
export const getJobTitles = (req, res) => {
  const query = "SELECT * FROM hrms.job_title;";


  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching JobTitles:", err);
      return res.status(500).send("Server error");
    }
    if (results.length === 0) {
      return res.status(404).send("JobTitles not found");
    }
    //const JobTitles = results.map(JobTitle => JobTitle.title);
    //console.log(results)
    res.status(200).json(results);
  });
  
};
// Function to get pay grades
export const getPayGrades = (req, res) => {
  const query = 'CALL GetPayGradeNames()';
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching pay grades:", err);
      return res.status(500).send("Server error");
    }
    if (results[0].length === 0) {
      return res.status(404).send("Pay grades not found");
    }
    //const pay_grades = results[0].map(payGrade => payGrade.name);
    //console.log(results[0])
    res.status(200).json(results[0]);
  });
};

// Function to get departments
export const getDepartments = (req, res) => {
    const countryName = 'Sri Lanka';

    const query = 'CALL GetDepartmentsByCountry(?)';
  
    db.query(query, [countryName], (err, results) => {
      if (err) {
        console.error("Error fetching departments:", err);
        return res.status(500).send("Server error");
      }
      if (results[0].length === 0) {
        return res.status(404).send("Departments not found");
      }
      //const departmentNames = results[0].map(department => department.name);
      //console.log(results[0])
      res.status(200).json(results[0]);
    });
  };
  export const employmentStats = (req, res) => {
    const query = `SELECT employment_state_id,CONCAT(employment_state.employment_type, ' ', employment_state.work_schedule) as employment_status 
                  FROM hrms.employment_state;`
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching employment stats:", err);
        return res.status(500).send("Server error");
      }
      if (results[0].length === 0) {
        return res.status(404).send("Employment stats not found");
      }
      res.status(200).json(results);
    });
  }