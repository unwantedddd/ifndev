import type { Response } from "express";
import { z } from "zod";
import { logError } from "../config/logger.ts";
import type { MutatedRequest } from "../types/authTypes.ts";
import { problemService } from "../services/problemService.ts";
import {
	createProblemSchema,
	updateProblemSchema,
	problemQuerySchema,
} from "../validators/problemValidators.ts";

const zodError = (res: Response, err: z.ZodError) =>
	res.status(400).json({
		error: "Validation failed",
		details: err.issues.map((e) => ({ field: e.path.join("."), message: e.message })),
	});

export const listProblems = async (req: MutatedRequest, res: Response) => {
	try {
		const query = problemQuerySchema.parse(req.query);
		const result = await problemService.list(query);
		return res.status(200).json({
			data: result.data,
			total: result.total,
			page: result.page,
			limit: result.limit,
			totalPages: result.totalPages,
		});
	} catch (err) {
		if (err instanceof z.ZodError) return zodError(res, err);
		logError("listProblems error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export const getProblem = async (req: MutatedRequest, res: Response) => {
	try {
		const slug = req.params["slug"];
		if (!slug) return res.status(400).json({ error: "Slug is required" });

		const problem = await problemService.getBySlug(slug);
		if (!problem) return res.status(404).json({ error: "Problem not found" });

		return res.status(200).json({ data: problem });
	} catch (err) {
		logError("getProblem error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export const createProblem = async (req: MutatedRequest, res: Response) => {
	try {
		const input = createProblemSchema.parse(req.body);
		const problem = await problemService.create(input);
		return res.status(201).json({ data: problem, message: "Problem created successfully" });
	} catch (err) {
		if (err instanceof z.ZodError) return zodError(res, err);
		logError("createProblem error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export const updateProblem = async (req: MutatedRequest, res: Response) => {
	try {
		const id = req.params["id"];
		if (!id) return res.status(400).json({ error: "ID is required" });

		const input = updateProblemSchema.parse(req.body);
		const problem = await problemService.update(id, input);
		if (!problem) return res.status(404).json({ error: "Problem not found" });

		return res.status(200).json({ data: problem, message: "Problem updated successfully" });
	} catch (err) {
		if (err instanceof z.ZodError) return zodError(res, err);
		logError("updateProblem error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export const deleteProblem = async (req: MutatedRequest, res: Response) => {
	try {
		const id = req.params["id"];
		if (!id) return res.status(400).json({ error: "ID is required" });

		const deleted = await problemService.remove(id);
		if (!deleted) return res.status(404).json({ error: "Problem not found" });

		return res.status(204).send();
	} catch (err) {
		logError("deleteProblem error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};
