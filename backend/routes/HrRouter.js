import { Router } from "express";
import { db } from "../config/db.js";

const router = Router();



// get all employeeslist from the database by calling the stored procedure GetEmployeeList

router.get("/employees", (req, res) => {
  const query = 'CALL GetEmployeeList()';

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching employee list:", err);
      return res.status(500).send("Server error");
    }

    res.status(200).json(results[0]);
  });
});


// get all employeedata from the database by calling the stored procedure GetEmployeeDataForView and GetDependentDetails



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

// get all employeedata from the database by calling the stored procedure GetEmployeeDataForView and GetDependentDetails

// Existing route to get departments
router.get("/departments", (req, res) => {
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
    const departmentNames = results[0].map(department => department.name);
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
