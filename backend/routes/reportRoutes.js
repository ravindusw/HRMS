import { Router } from "express";
import {
  getEmployeeReport,
  getLeaveReport,
  getLeaveBalanceReport,
} from "../controllers/reportController.js";

const router = Router();

router.get("/employee-report/:department", getEmployeeReport);
router.get("/leave-report", getLeaveReport);
router.get(
  "/report/LeaveBalanceReport/:department/:leaveType",
  getLeaveBalanceReport
);

export default router;
