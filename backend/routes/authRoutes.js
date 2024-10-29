import { Router } from "express";
import { login } from "../controllers/authController.js";
import { addUser, addEmployee } from "../controllers/authController.js";
import { verifyToken, authorizeRoles } from "../middleWare/authMiddleware.js";
import { getSupervisors } from "../controllers/employeeControler.js";
import { fetchJobTitles } from "../controllers/configurationController.js";
// import { getCustomAttributes } from "../controllers/customAttributesContoller.js";

import customAttributeRoutes from "./customAttributeRoutes.js";
import HrRouter from "./HrRouter.js";

const router = Router();

router.post("/login", login);

router.use("/Hr", verifyToken, authorizeRoles("Admin", "HR Manager"), HrRouter);

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

router.get(
  "/getJobTitles",
  verifyToken,
  authorizeRoles("Admin", "HR Manager"),
  fetchJobTitles
);

router.post(
  "/addEmployee",
  verifyToken,
  authorizeRoles("Admin", "HR Manager"),
  addEmployee
);

router.use(
  "/customAttributes",
  verifyToken,
  // authorizeRoles("Admin", "HR Manager"),
  customAttributeRoutes
);

export default router;
