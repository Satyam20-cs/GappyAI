import express from "express";

import {
  aiChat,
  reviewResume,
  generateCoverLetter,
} from "../controllers/aicontroller.js";

const router = express.Router();

router.post("/chat", aiChat);
router.post("/resume-review", reviewResume);
router.post("/cover-letter", generateCoverLetter);

export default router;