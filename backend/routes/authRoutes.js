import { Router } from "express";
import { login } from "../controllers/authController.js";
import { createUser } from "../controllers/authController.js";

const router = Router();

router.post("/login", login);
router.post("/createUser", createUser);

export default router;
