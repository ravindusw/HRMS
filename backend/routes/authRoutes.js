import { Router } from "express";
import { login } from "../controllers/authController.js";
import { addUser } from "../controllers/authController.js";
import { verifyToken, authorizeRoles } from "../middleWare/authMiddleware.js";

const router = Router();

router.post("/login", login);
router.post(
  "/addUser",
  verifyToken,
  authorizeRoles("admin", "hr_manager"),
  addUser
);

export default router;
