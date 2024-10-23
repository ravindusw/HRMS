import { Router } from "express";
import { fetchRemainingLeaveCount } from "../controllers/dashboardController.js";

const router = Router();

router.get("/get-remaining-leave-count/:id", fetchRemainingLeaveCount);


export default router;