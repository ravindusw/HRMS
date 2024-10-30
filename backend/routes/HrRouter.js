import { Router } from "express";
import { db } from "../config/db.js";
import { getJobTitles, getPayGrades, getDepartments ,employmentStats} from '../controllers/metadataController.js';
import { getAllEmployees } from '../controllers/employeesController.js';
import { getEmployeeByIdForHr,getEachEmployeeCostumAttributes } from '../controllers/employeesController.js';
import { updateEmployeeData} from '../controllers/updateEmployeeDataController.js';

const router = Router();



// get all employeeslist from the database by calling the stored procedure GetEmployeeList

router.get("/employees", getAllEmployees)


// get all employeedata from the database by calling the stored procedure GetEmployeeDataForView and GetDependentDetails



router.get("/employees/:id",getEmployeeByIdForHr)

router.put("/employees/:id",updateEmployeeData)

// Route to get job titles
router.get("/JobTitles", getJobTitles);

// Route to get pay grades
router.get("/pay_grades", getPayGrades);

// Route to get departments
router.get("/departments", getDepartments);

router.get("/employmentStats",employmentStats)

router.get("/attributes/:id/",getEachEmployeeCostumAttributes)




export default router;
