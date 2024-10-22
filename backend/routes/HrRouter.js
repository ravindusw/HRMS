import { Router } from "express";
import { db } from "../config/db.js";
import { getJobTitles, getPayGrades, getDepartments } from '../controllers/metadataController.js';
import { getAllEmployees } from '../controllers/employeesController.js';
import { getEmployeeByIdForHr } from '../controllers/employeesController.js';

const router = Router();



// get all employeeslist from the database by calling the stored procedure GetEmployeeList

router.get("/employees", getAllEmployees)


// get all employeedata from the database by calling the stored procedure GetEmployeeDataForView and GetDependentDetails



router.get("/employees/:id",getEmployeeByIdForHr)



// Route to get job titles
router.get("/JobTitles", getJobTitles);

// Route to get pay grades
router.get("/pay_grades", getPayGrades);

// Route to get departments
router.get("/departments", getDepartments);


export default router;
