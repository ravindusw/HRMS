import { Router } from "express";
import {
  getEmployeeReport,
  LeaveReport,
  getSalaryReport,
} from "../controllers/reportController.js";

const router = Router();

router.get("/employee-report/:department", getEmployeeReport);
router.get("/leave-report", getLeaveReport);
router.get(
  "/report/LeaveBalanceReport/:department/:month",
  getLeaveBalanceReport
);

export default router;
