import { z } from "zod";

const SUBMISSION_STATUSES = [
	"ACCEPTED",
	"WRONG_ANSWER",
	"TIME_LIMIT_EXCEEDED",
	"COMPILE_ERROR",
] as const;

export const createSubmissionSchema = z.strictObject({
	problemId: z.string().uuid(),
	code: z.string().min(1),
	language: z.string().min(1).max(50),
	status: z.enum(SUBMISSION_STATUSES),
	runtime: z.number().int().nonnegative().optional(),
	memory: z.number().int().nonnegative().optional(),
});

export const submissionQuerySchema = z.object({
	page: z.coerce.number().int().positive().default(1),
	limit: z.coerce.number().int().positive().max(100).default(10),
	problemId: z.string().uuid().optional(),
	status: z.enum(SUBMISSION_STATUSES).optional(),
});

export type CreateSubmissionInput = z.infer<typeof createSubmissionSchema>;
export type SubmissionQueryInput = z.infer<typeof submissionQuerySchema>;
