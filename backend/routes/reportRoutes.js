import { Router } from "express";
import {
  EmployeeReport,
  LeaveReport,
  SalaryReport,
  CustomFieldsReport,
} from "../controllers/reportController.js";

const router = Router();

router.get("/employees-report", EmployeeReport);
router.get("/leave-report", LeaveReport);
router.get("/salary-report", SalaryReport);
router.get("/custom-fields-report", CustomFieldsReport);

export default router;
