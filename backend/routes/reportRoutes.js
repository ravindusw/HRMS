import { Router } from "express";
import {
  getEmployeeReport,
  getLeaveReport,
  getLeaveBalanceReport,
  getCustomFieldReport,
} from "../controllers/reportController.js";

const router = Router();

router.get("/employee-report/:department", getEmployeeReport);
router.get("/leave-report", getLeaveReport);
router.get(
  "/report/leavebalance-report/:department/:leaveType",
  getLeaveBalanceReport
);
router.get("/report/custom-fields-report", getCustomFieldReport);

export default router;
