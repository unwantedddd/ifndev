import { submissionRepository } from "../repositories/submissionRepository.ts";
import { problemRepository } from "../repositories/problemRepository.ts";
import type { SubmissionStatus } from "../../generated/prisma/client.ts";
import type { CreateSubmissionInput, SubmissionQueryInput } from "../validators/submissionValidators.ts";

const list = async (userId: string, query: SubmissionQueryInput) => {
	const { data, total } = await submissionRepository.findMany(userId, query);
	return {
		data,
		total,
		page: query.page,
		limit: query.limit,
		totalPages: Math.ceil(total / query.limit),
	};
};

type GetByIdResult =
	| { submission: Awaited<ReturnType<typeof submissionRepository.findById>>; forbidden: false }
	| { submission: null; forbidden: true }
	| { submission: null; forbidden: false };

const getById = async (id: string, requestingUserId: string): Promise<GetByIdResult> => {
	const submission = await submissionRepository.findById(id);
	if (!submission) return { submission: null, forbidden: false };
	if (submission.userId !== requestingUserId) return { submission: null, forbidden: true };
	return { submission, forbidden: false };
};

const create = async (userId: string, input: CreateSubmissionInput) => {
	const problem = await problemRepository.findById(input.problemId);
	if (!problem) return null;

	return submissionRepository.create({
		userId,
		problemId: input.problemId,
		code: input.code,
		language: input.language,
		status: input.status as SubmissionStatus,
		...(input.runtime !== undefined && { runtime: input.runtime }),
		...(input.memory !== undefined && { memory: input.memory }),
	});
};

export const submissionService = { list, getById, create };
