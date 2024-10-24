import { Router } from "express";
import { setSupport } from "../controllers/supportController.js";

const router = Router();

router.post("/", setSupport);

export default router;
