import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/ProfileRoutes.js";
import { verifyToken } from "./middleWare/authMiddleware.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import all routes here

// Use the login route
app.use("/api/auth", authRoutes);

// Use the profile route with the verifyToken middleware
app.use("/api/profile", verifyToken, profileRoutes);

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
