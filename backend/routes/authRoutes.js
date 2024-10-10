import { Router } from "express";
import { login } from "../controllers/authController.js";
import { addUser } from "../controllers/authController.js";

const router = Router();

router.post("/login", login);
router.post("/addUser", addUser);

export default router;
