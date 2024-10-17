import { Router } from "express";
import { db } from "../config/db.js";

const router = Router();

/////////////////////////////////////// untill quary make it to the database for checking the data /////

const initialEmployees = [
  {
    id: "EMP0002",
    name: "Jane Smith",
    gender: "Female",
    job: "Software Engineer",
    email: "jane.smith@gmail.com",
    dependents: null,
  },
  {
    id: "EMP0003",
    name: "Michael Johnson",
    gender: "Male",
    job: "Accountant",
    email: "michael.johnson@gmail.com",
    dependents: [{ name: "Emma Johnson", relation: "Daughter", age: 5 }],
  },
  {
    id: "EMP0004",
    name: "Emily Davis",
    gender: "Female",
    job: "QA Engineer",
    email: "emily.davis@gmail.com",
    dependents: null,
  },
  {
    id: "EMP0005",
    name: "David Wilson",
    gender: "Male",
    job: "Data Scientist",
    email: "david.wilson@gmail.com",
    dependents: [{ name: "Noah Wilson", relation: "Son", age: 7 }],
  },
  {
    id: "EMP0006",
    name: "Sophia Brown",
    gender: "Female",
    job: "UX Designer",
    email: "sophia.brown@gmail.com",
    dependents: null,
  },
  {
    id: "EMP0007",
    name: "James Taylor",
    gender: "Male",
    job: "Project Manager",
    email: "james.taylor@gmail.com",
    dependents: [{ name: "Lily Taylor", relation: "Daughter", age: 3 }],
  },
  {
    id: "EMP0008",
    name: "Olivia Anderson",
    gender: "Female",
    job: "Marketing Specialist",
    email: "olivia.anderson@gmail.com",
    dependents: null,
  },
  {
    id: "EMP0009",
    name: "William Thomas",
    gender: "Male",
    job: "System Administrator",
    email: "william.thomas@gmail.com",
    dependents: [
      { name: "Benjamin Thomas", relation: "Son", age: 8 },
      { name: "Sophia Thomas", relation: "Daughter", age: 6 },
    ],
  },
  {
    id: "EMP0010",
    name: "Isabella Martinez",
    gender: "Female",
    job: "Graphic Designer",
    email: "isabella.martinez@gmail.com",
    dependents: null,
  },
  {
    id: "EMP0011",
    name: "Ethan Garcia",
    gender: "Male",
    job: "DevOps Engineer",
    email: "ethan.garcia@gmail.com",
    dependents: [{ name: "Olivia Garcia", relation: "Daughter", age: 4 }],
  },
  {
    id: "EMP0012",
    name: "Ava Rodriguez",
    gender: "Female",
    job: "Content Writer",
    email: "ava.rodriguez@gmail.com",
    dependents: null,
  },
  {
    id: "EMP0013",
    name: "Daniel Lee",
    gender: "Male",
    job: "Web Developer",
    email: "daniel.lee@gmail.com",
    dependents: [{ name: "Lucas Lee", relation: "Son", age: 10 }],
  },
  {
    id: "EMP0014",
    name: "Mia Perez",
    gender: "Female",
    job: "Business Analyst",
    email: "mia.perez@gmail.com",
    dependents: null,
  },
  {
    id: "EMP0015",
    name: "Lucas White",
    gender: "Male",
    job: "Network Engineer",
    email: "lucas.white@gmail.com",
    dependents: [{ name: "Ella White", relation: "Daughter", age: 2 }],
  },
  {
    id: "EMP0016",
    name: "Charlotte Harris",
    gender: "Female",
    job: "SEO Specialist",
    email: "charlotte.harris@gmail.com",
    dependents: null,
  },
  {
    id: "EMP0017",
    name: "Henry Clark",
    gender: "Male",
    job: "Technical Writer",
    email: "henry.clark@gmail.com",
    dependents: [
      { name: "Amelia Clark", relation: "Daughter", age: 7 },
      { name: "Jack Clark", relation: "Son", age: 5 },
    ],
  },
  {
    id: "EMP0018",
    name: "Amelia Lewis",
    gender: "Female",
    job: "HR Manager",
    email: "amelia.lewis@gmail.com",
    dependents: null,
  },
  {
    id: "EMP0019",
    name: "Alexander Robinson",
    gender: "Male",
    job: "Sales Executive",
    email: "alexander.robinson@gmail.com",
    dependents: [{ name: "Isabella Robinson", relation: "Daughter", age: 6 }],
  },
  {
    id: "EMP0020",
    name: "Evelyn Walker",
    gender: "Female",
    job: "Product Manager",
    email: "evelyn.walker@gmail.com",
    dependents: null,
  },
  {
    id: "EMP0021",
    name: "Jack Hall",
    gender: "Male",
    job: "Financial Analyst",
    email: "jack.hall@gmail.com",
    dependents: [{ name: "Sophia Hall", relation: "Daughter", age: 12 }],
  },
  {
    id: "EMP0022",
    name: "Ella Young",
    gender: "Female",
    job: "Operations Coordinator",
    email: "ella.young@gmail.com",
    dependents: null,
  },
];




const JobTitles = ['HR Manager', 'Accountant', 'Software Engineer', 'QA Engineer'];

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
    `SELECT employee_id as id,(CONCAT(first_name, ' ', last_name))  AS "name",job_title.title as job,hrms.department.name as department,gender,email
    FROM employee inner join  job_title using(job_title_id) inner join department using(dept_id);
`, 
    
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



router.get("/employees/:id", (req, res) => {
  const employeeId = req.params.id;
  const employee = initialEmployees.find(emp => emp.id === employeeId);
  
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
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
