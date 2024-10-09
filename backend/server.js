import express from "express";
import cors from "cors";
import { db } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/ProfileRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import all routes here

// Use the login route

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

// Start the server

const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Error handling middleware
// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error stack:", err.stack);
  console.error("Error message:", err.message);
  res.status(500).send("Something broke!");
});
