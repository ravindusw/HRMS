import { Router } from "express";
import { getCustomAttributes } from "../controllers/customAttributesContoller.js";
import { removeAttribute } from "../controllers/customAttributesContoller.js";
import { addAttribute } from "../controllers/customAttributesContoller.js";

const router = Router();

router.get("/", getCustomAttributes);
router.delete("/removeAttribute/:attributeId", removeAttribute);

router.post("/addAttribute", addAttribute);

export default router;
