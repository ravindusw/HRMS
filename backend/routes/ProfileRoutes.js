import { Router } from "express";
import { getProfile } from "../controllers/profileController.js";
import { verifyToken } from "../middleWare/authMiddleware.js";

const router = Router();

router.get("/", verifyToken, getProfile);

export default router;
