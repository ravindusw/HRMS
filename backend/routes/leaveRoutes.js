import { Router } from "express";
import {getemployeeleavedetail, getpendingleavedetail,approveleaverequest, getLeaveTypes, applyLeave ,getLeaveHistory, rejectleaverequest} from "../controllers/leaveController.js";
import { verifyToken } from "../middleWare/authMiddleware.js";

import { login } from "../controllers/authController.js";
const router = Router();

router.get("/getLeaveInfo/:employee_id", getemployeeleavedetail);

router.get("/pendingLeaveREQUEST",verifyToken, getpendingleavedetail);

router.get("/get-leave-types", getLeaveTypes);

router.post("/apply-leave", verifyToken, applyLeave);

router.put("/approveLeaveREQUEST/:leave_record_id",verifyToken, approveleaverequest);
router.put("/rejectLeaveREQUEST/:leave_record_id", verifyToken, rejectleaverequest);

router.get("/get-leave-history",verifyToken, getLeaveHistory);
export default router;