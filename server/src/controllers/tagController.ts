import type { Response } from "express";
import { z } from "zod";
import { logError } from "../config/logger.ts";
import type { MutatedRequest } from "../types/authTypes.ts";
import { tagService } from "../services/tagService.ts";
import { createTagSchema } from "../validators/tagValidators.ts";

const zodError = (res: Response, err: z.ZodError) =>
	res.status(400).json({
		error: "Validation failed",
		details: err.issues.map((e) => ({ field: e.path.join("."), message: e.message })),
	});

export const listTags = async (req: MutatedRequest, res: Response) => {
	try {
		const tags = await tagService.list();
		return res.status(200).json({ data: tags });
	} catch (err) {
		logError("listTags error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export const createTag = async (req: MutatedRequest, res: Response) => {
	try {
		const input = createTagSchema.parse(req.body);
		const { tag, conflict } = await tagService.create(input);
		if (conflict) return res.status(409).json({ error: "Tag already exists" });

		return res.status(201).json({ data: tag, message: "Tag created successfully" });
	} catch (err) {
		if (err instanceof z.ZodError) return zodError(res, err);
		logError("createTag error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export const deleteTag = async (req: MutatedRequest, res: Response) => {
	try {
		const id = req.params["id"];
		if (!id) return res.status(400).json({ error: "ID is required" });

		const deleted = await tagService.remove(id);
		if (!deleted) return res.status(404).json({ error: "Tag not found" });

		return res.status(204).send();
	} catch (err) {
		logError("deleteTag error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};
