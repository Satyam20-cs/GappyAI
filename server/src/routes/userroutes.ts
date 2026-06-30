import { Router } from "express";
import authMiddleware from "../middleware/authmiddleware.js";
import { getCurrentUser } from "../controllers/usercontroller.js";

const router = Router();

router.get("/me", authMiddleware, getCurrentUser);

export default router;