import express from "express";
import {
	listSubmissions,
	getSubmission,
	createSubmission,
} from "../controllers/submissionController.ts";
import { authMiddleware } from "../middlewares/authMiddleware.ts";

const router = express.Router();

router.get("/", authMiddleware, listSubmissions);
router.get("/:id", authMiddleware, getSubmission);
router.post("/", authMiddleware, createSubmission);

export default router;
