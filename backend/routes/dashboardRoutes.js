import { Router } from "express";
import { 
    fetchRemainingLeaveCount,
    fetchTotalEmployeeCount,
    fetchAbsentEmployeeCount,
    fetchRoleCount,
    fetchUpcomingLeaves
 } from "../controllers/dashboardController.js";
import { verifyToken } from "../middleWare/authMiddleware.js";

const router = Router();

router.get("/get-remaining-leave-count", verifyToken,fetchRemainingLeaveCount);
router.get("/get_total_employee_count", fetchTotalEmployeeCount);
router.get("/get-absent-employee-count", fetchAbsentEmployeeCount);
router.get("/get-role-count", fetchRoleCount);
router.get("/get-upcoming-leaves", verifyToken, fetchUpcomingLeaves);


export default router;