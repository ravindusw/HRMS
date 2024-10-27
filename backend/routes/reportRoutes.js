import { Router } from "express";
import {
  getEmployeeReport,
  getLeaveReport,
  getLeaveBalanceReport,
} from "../controllers/reportController.js";
import { verifyToken, authorizeRoles } from "../middleWare/authMiddleware.js";

const router = Router();

router.get("/employee-report/:department", verifyToken, getEmployeeReport);
router.get("/leave-report/:department", getLeaveReport);
router.get(
  "/leavebalance-report/:department/:leaveType",
  getLeaveBalanceReport
);
//router.get("/report/custom-fields-report", getCustomFieldReport);

export default router;
