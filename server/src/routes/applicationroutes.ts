import express from "express";
import {
  addApplication,
  getApplications,
} from "../controllers/applicationcontroller";

const router = express.Router();

router.post("/", addApplication);
router.get("/:userId", getApplications);

export default router;