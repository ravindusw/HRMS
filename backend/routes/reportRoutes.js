import { Router } from "express";

router.get("/employees-report", EmployeeReport);
router.get("/leave-report", LeaveReport);
router.get("/salary-report", SalaryReport);
router.get("/custom-fields-report", CustomFieldsReport);

export default router;
