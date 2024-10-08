import { Router } from "express";
import { getProfile } from "../controllers/profileController.js";

const router = Router();

router.get("/:employee_id", getProfile);

export default router;
