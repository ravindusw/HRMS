import { Router } from "express";
import { login } from "../controllers/authController.js";
import { addUser, addEmployee } from "../controllers/authController.js";
import { verifyToken, authorizeRoles } from "../middleWare/authMiddleware.js";
import { getSupervisors } from "../controllers/employeeControler.js";

const router = Router();

router.post("/login", login);

router.post(
  "/addUser",
  verifyToken,
  authorizeRoles("Admin", "HR Manager"),
  addUser
);

router.get(
  "/getSupervisors",
  verifyToken,
  authorizeRoles("Admin", "HR Manager"),
  getSupervisors
);

router.post(
  "/addEmployee",
  verifyToken,
  authorizeRoles("HR Manager"),
  addEmployee
);

export default router;
