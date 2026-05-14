import express from "express";
import {
	listProblems,
	getProblem,
	createProblem,
	updateProblem,
	deleteProblem,
} from "../controllers/problemController.ts";
import { authMiddleware } from "../middlewares/authMiddleware.ts";

const router = express.Router();

router.get("/", listProblems);
router.get("/:slug", getProblem);
router.post("/", authMiddleware, createProblem);
router.put("/:id", authMiddleware, updateProblem);
router.delete("/:id", authMiddleware, deleteProblem);

export default router;
