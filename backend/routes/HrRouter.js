import { Router } from "express";
import { db } from "../config/db.js";

const router = Router();




/*

router.get("/employees", (req, res) => {
  if (initialEmployees) {
    //console.log(initialEmployees);
    res.json(initialEmployees);
  } else {
    response.status(404).end();
  }
});
*/


router.get("/employees", (req, res) => {

  db.query(
   `SELECT employee_id as id, (CONCAT(first_name, ' ', last_name)) AS "name", job_title.title as job, hrms.department.name as department, gender, email
    FROM employee 
    INNER JOIN job_title USING(job_title_id) 
    INNER JOIN department USING(dept_id) 
    ORDER BY first_name, last_name;`, 
    
    (err, results) => {
    if (err) {
      console.error("Error fetching employees:", err);
      return res.status(500).send("Server error");
    }
    if (results.length === 0) {
      return res.status(404).send("employees not found");
    }
    //const employees = employees.map(employees => JobTitle.title);
    //console.log(results)
    res.status(200).json(results);
  });
  
});


/*
router.get("/employees/:id", (req, res) => {
  const employeeId = req.params.id;
  const employee = initialEmployees.find(emp => emp.id === employeeId);
  
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
});
*/

// GET Employee datas BY ID

router.get("/employees/:id", (req, res) => {
  const employeeId = req.params.id;

  const employeeQuery = 'CALL GetEmployeeDataForView(?)';
  const dependentQuery = 'CALL GetDependentDetails(?)';

  db.query(employeeQuery, [employeeId], (err, employeeResults) => {
    if (err) {
      console.error("Error fetching employee data:", err);
      return res.status(500).send("Server error");
    }

    if (employeeResults[0].length === 0) {
      return res.status(404).send("Employee not found");
    }

    const employee = {
      id: employeeResults[0][0].id,
      name: employeeResults[0][0].name,
      NIC: employeeResults[0][0].NIC,
      username: employeeResults[0][0].username,
      birthday: employeeResults[0][0].birthday,
      gender: employeeResults[0][0].gender,
      job_title: employeeResults[0][0].job_title,
      pay_grade: employeeResults[0][0].pay_grade,
      department: employeeResults[0][0].department,
      branch: employeeResults[0][0].branch,
      hired_date: employeeResults[0][0].hired_date,
      employment_status: employeeResults[0][0].employment_status,
      marital_state: employeeResults[0][0].marital_state,
      email: employeeResults[0][0].email,
      address: employeeResults[0][0].address,
      phone_numbers: [],
      dependents: []
    };

    employeeResults[0].forEach(row => {
      if (row.phone_number) {
        employee.phone_numbers.push(row.phone_number);
      }
    });

    db.query(dependentQuery, [employeeId], (err, dependentResults) => {
      if (err) {
        console.error("Error fetching dependent data:", err);
        return res.status(500).send("Server error");
      }

      dependentResults[0].forEach(row => {
        employee.dependents.push({
          name: row.dependent_name,
          date_of_birth: row.dependent_birthday,
          gender: row.dependent_gender,
          phone_number: row.dependent_phone_number
        });
      });
      console.log(employee)
      res.status(200).json(employee);
    });
  });
});



router.get("/departments", (req, res) => {

  db.query("SELECT name,dept_id FROM hrms.department where branch_id =(select branch_id from branch where country='Sri Lanka'  );", (err, results) => {
    if (err) {
      console.error("Error fetching departments:", err);
      return res.status(500).send("Server error");
    }
    if (results.length === 0) {
      return res.status(404).send("Departments not found");
    }
    const departmentNames = results.map(department => department.name);
    //console.log(results)
    res.status(200).json(departmentNames);
  });
  
});

router.get("/JobTitles", (req, res) => {

  db.query("SELECT title FROM hrms.job_title;", (err, results) => {
    if (err) {
      console.error("Error fetching JobTitles:", err);
      return res.status(500).send("Server error");
    }
    if (results.length === 0) {
      return res.status(404).send("JobTitles not found");
    }
    const JobTitles = results.map(JobTitle => JobTitle.title);
    //console.log(JobTitles)
    res.status(200).json(JobTitles);
  });
  
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default router;
