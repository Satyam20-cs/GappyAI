import express from "express";
import cors from "cors";

import authRoutes from "./routes/authroutes.js";
import userRoutes from "./routes/userroutes.js";
import applicationRoutes from "./routes/applicationroutes.js";
import aiRoutes from "./routes/airoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/ai", aiRoutes);
app.get("/", (req, res) => {
  res.send("GappyAI Backend Running");
});

export default app;