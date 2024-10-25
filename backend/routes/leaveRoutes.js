import { Router } from "express";
import {getemployeeleavedetail, getpendingleavedetail,approveleaverequest} from "../controllers/leaveController.js";

import { login } from "../controllers/authController.js";
const router = Router();

router.get("/getLeaveInfo/:employee_id", getemployeeleavedetail);

router.get("/pendingLeaveREQUEST", getpendingleavedetail);

router.put("/approveLeaveREQUEST/:leave_record_id", approveleaverequest);
export default router;