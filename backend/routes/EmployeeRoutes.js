router.post("/leaveREQUEST", login);
router.post(
  "/addUser",
  verifyToken,
  authorizeRoles("Admin", "HR Manager"),
  addUser
);

// leave req
