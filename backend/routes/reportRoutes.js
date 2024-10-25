import { Router } from "express";
import {
  getEmployeeReport,
  LeaveReport,
  SalaryReport,
} from "../controllers/reportController.js";

const router = Router();

router.get("/employee-report/:department", getEmployeeReport);
router.get("/leave-report", LeaveReport);
router.get("/salary-report", SalaryReport);

export default router;
