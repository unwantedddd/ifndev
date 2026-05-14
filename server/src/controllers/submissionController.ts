import type { Response } from "express";
import { z } from "zod";
import { logError } from "../config/logger.ts";
import type { MutatedRequest } from "../types/authTypes.ts";
import { submissionService } from "../services/submissionService.ts";
import {
	createSubmissionSchema,
	submissionQuerySchema,
} from "../validators/submissionValidators.ts";

const zodError = (res: Response, err: z.ZodError) =>
	res.status(400).json({
		error: "Validation failed",
		details: err.issues.map((e) => ({ field: e.path.join("."), message: e.message })),
	});

export const listSubmissions = async (req: MutatedRequest, res: Response) => {
	const userId = req.userId;
	if (!userId) return res.status(401).json({ error: "Unauthorized" });

	try {
		const query = submissionQuerySchema.parse(req.query);
		const result = await submissionService.list(userId, query);
		return res.status(200).json({
			data: result.data,
			total: result.total,
			page: result.page,
			limit: result.limit,
			totalPages: result.totalPages,
		});
	} catch (err) {
		if (err instanceof z.ZodError) return zodError(res, err);
		logError("listSubmissions error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export const getSubmission = async (req: MutatedRequest, res: Response) => {
	const userId = req.userId;
	if (!userId) return res.status(401).json({ error: "Unauthorized" });

	try {
		const id = req.params["id"];
		if (!id) return res.status(400).json({ error: "ID is required" });

		const { submission, forbidden } = await submissionService.getById(id, userId);
		if (forbidden) return res.status(403).json({ error: "Forbidden" });
		if (!submission) return res.status(404).json({ error: "Submission not found" });

		return res.status(200).json({ data: submission });
	} catch (err) {
		logError("getSubmission error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export const createSubmission = async (req: MutatedRequest, res: Response) => {
	const userId = req.userId;
	if (!userId) return res.status(401).json({ error: "Unauthorized" });

	try {
		const input = createSubmissionSchema.parse(req.body);
		const submission = await submissionService.create(userId, input);
		if (!submission) return res.status(404).json({ error: "Problem not found" });

		return res
			.status(201)
			.json({ data: submission, message: "Submission created successfully" });
	} catch (err) {
		if (err instanceof z.ZodError) return zodError(res, err);
		logError("createSubmission error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};
