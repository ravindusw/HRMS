import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/ProfileRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import { verifyToken } from "./middleWare/authMiddleware.js";
import HrRouter from "./routes/HrRouter.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use the login route
app.use("/api/auth", authRoutes);

// Use the profile route
app.use("/api/profile", profileRoutes);

// Use the routes
app.use("/api/notification", verifyToken, notificationRoutes);
app.use("/api/Hr", HrRouter);
app.use("/api/dashboard", dashboardRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

// Start the server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error stack:", err.stack);
  console.error("Error message:", err.message);
  res.status(500).send("Something broke!");
});
1;
