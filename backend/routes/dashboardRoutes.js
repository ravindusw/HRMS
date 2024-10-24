import { Router } from "express";
import { fetchRemainingLeaveCount } from "../controllers/dashboardController.js";
import { verifyToken } from "../middleWare/authMiddleware.js";

const router = Router();

router.get("/get-remaining-leave-count", verifyToken,fetchRemainingLeaveCount);


export default router;