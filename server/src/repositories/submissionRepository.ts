import { prisma } from "../config/database.ts";
import type { Prisma, SubmissionStatus } from "../../generated/prisma/client.ts";
import type { SubmissionQueryInput } from "../validators/submissionValidators.ts";

type CreateSubmissionData = {
	userId: string;
	problemId: string;
	code: string;
	language: string;
	status: SubmissionStatus;
	runtime?: number;
	memory?: number;
};

const SUBMISSION_SELECT = {
	id: true,
	code: true,
	language: true,
	status: true,
	runtime: true,
	memory: true,
	userId: true,
	problemId: true,
	createdAt: true,
	problem: { select: { id: true, title: true, slug: true } },
};

const findMany = async (userId: string, query: SubmissionQueryInput) => {
	const { page, limit, problemId, status } = query;
	const skip = (page - 1) * limit;

	const where: Prisma.SubmissionWhereInput = {
		userId,
		...(problemId !== undefined && { problemId }),
		...(status !== undefined && { status }),
	};

	const [data, total] = await Promise.all([
		prisma.submission.findMany({
			where,
			skip,
			take: limit,
			select: SUBMISSION_SELECT,
			orderBy: { createdAt: "desc" },
		}),
		prisma.submission.count({ where }),
	]);

	return { data, total };
};

const findById = async (id: string) => {
	return prisma.submission.findUnique({
		where: { id },
		select: SUBMISSION_SELECT,
	});
};

const create = async (data: CreateSubmissionData) => {
	return prisma.submission.create({
		data,
		select: SUBMISSION_SELECT,
	});
};

export const submissionRepository = { findMany, findById, create };
