import { z } from "zod";

export const createProblemSchema = z.strictObject({
	title: z.string().min(3).max(200),
	description: z.string().min(10),
	difficulty: z.enum(["Easy", "Medium", "Hard"]),
	timeLimit: z.number().int().positive().optional(),
	memoryLimit: z.number().int().positive().optional(),
	testCases: z.string().min(2),
	tagIds: z.array(z.string().uuid()).optional(),
});

export const updateProblemSchema = z.strictObject({
	title: z.string().min(3).max(200).optional(),
	description: z.string().min(10).optional(),
	difficulty: z.enum(["Easy", "Medium", "Hard"]).optional(),
	timeLimit: z.number().int().positive().optional(),
	memoryLimit: z.number().int().positive().optional(),
	testCases: z.string().min(2).optional(),
	tagIds: z.array(z.string().uuid()).optional(),
});

export const problemQuerySchema = z.object({
	page: z.coerce.number().int().positive().default(1),
	limit: z.coerce.number().int().positive().max(100).default(10),
	difficulty: z.enum(["Easy", "Medium", "Hard"]).optional(),
	tag: z.string().optional(),
	search: z.string().optional(),
});

export type CreateProblemInput = z.infer<typeof createProblemSchema>;
export type UpdateProblemInput = z.infer<typeof updateProblemSchema>;
export type ProblemQueryInput = z.infer<typeof problemQuerySchema>;
