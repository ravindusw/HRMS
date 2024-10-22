import { Router } from "express";
import {getemployeeleavedetail} from "../controllers/employeeControler.js";
import { login } from "../controllers/authController.js";

const router = Router();

router.post("/leaveREQUEST", login);

router.get("/getLeaveInfo/:employee_id", getemployeeleavedetail);

export default router;