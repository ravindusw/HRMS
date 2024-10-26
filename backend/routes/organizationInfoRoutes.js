import { Router } from "express";
import { verifyToken } from "../middleWare/authMiddleware.js";
import { fetchOrganizationInfo , fetchBranchInfo , updateBranchInfo } from "../controllers/organizationInfoController.js";

const router = Router();

router.get("/fetch-organization-details", fetchOrganizationInfo);
router.get("/fetch-branch-details", fetchBranchInfo);
router.post("/update-branch-details", verifyToken, updateBranchInfo);


export default router;