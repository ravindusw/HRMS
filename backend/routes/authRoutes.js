import { Router } from "express";
import { login } from "../controllers/authController.js";
import { addUser } from "../controllers/authController.js";
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
  "/supervisors",
  verifyToken,
  authorizeRoles("Admin", "HR Manager"),
  getSupervisors
);

router.get("/getEmployeeData", getSupervisors);

export default router;
