import { Router } from "express";
import {
  EmployeeReport,
  LeaveReport,
  SalaryReport,
  CustomFieldsReport,
} from "../controllers/reportController.js";

const router = Router();

router.get("/EmployeeReport", EmployeeReport);
router.get("/LeaveReport", LeaveReport);
router.get("/SalaryReport", SalaryReport);

export default router;
