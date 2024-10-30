import { Router } from "express";
import {
  getEmployeeReport,
  getLeaveReport,
  getLeaveBalanceReport,
  getCustomFieldReport,
} from "../controllers/reportController.js";
import { verifyToken, authorizeRoles } from "../middleWare/authMiddleware.js";

const router = Router();

router.get("/employee-report/:department", verifyToken, getEmployeeReport);
router.get("/leave-report/:department", verifyToken, getLeaveReport);
router.get(
  "/leavebalance-report/:department/:leaveType",
  verifyToken,
  getLeaveBalanceReport
);
router.get(
  "/custom-fields-report/:attribute_name",
  getCustomFieldReport
);

export default router;
