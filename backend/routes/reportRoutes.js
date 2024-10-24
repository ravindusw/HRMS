import { Router } from "express";
import {
  EmployeeReport,
  LeaveReport,
  SalaryReport,
} from "../controllers/reportController.js";

const router = Router();

router.get("/employee-report", EmployeeReport);
router.get("/leave-report", LeaveReport);
router.get("/salary-report", SalaryReport);

export default router;
