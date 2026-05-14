import { prisma } from "../config/database.ts";
import type { Prisma } from "../../generated/prisma/client.ts";
import type { ProblemQueryInput } from "../validators/problemValidators.ts";

type CreateProblemData = {
	title: string;
	slug: string;
	description: string;
	difficulty: string;
	timeLimit?: number;
	memoryLimit?: number;
	testCases: string;
	tagIds: string[];
};

type UpdateProblemData = {
	title?: string;
	slug?: string;
	description?: string;
	difficulty?: string;
	timeLimit?: number;
	memoryLimit?: number;
	testCases?: string;
	tagIds?: string[];
};

const LIST_SELECT = {
	id: true,
	title: true,
	slug: true,
	difficulty: true,
	acceptanceRate: true,
	tags: { select: { id: true, name: true } },
	createdAt: true,
};

const FULL_SELECT = {
	id: true,
	title: true,
	slug: true,
	description: true,
	difficulty: true,
	timeLimit: true,
	memoryLimit: true,
	testCases: true,
	acceptanceRate: true,
	tags: { select: { id: true, name: true } },
	createdAt: true,
	updatedAt: true,
};

const findMany = async (query: ProblemQueryInput) => {
	const { page, limit, difficulty, tag, search } = query;
	const skip = (page - 1) * limit;

	const where: Prisma.ProblemWhereInput = {
		...(difficulty !== undefined && { difficulty }),
		...(tag !== undefined && { tags: { some: { name: tag } } }),
		...(search !== undefined && {
			OR: [
				{ title: { contains: search } },
				{ description: { contains: search } },
			],
		}),
	};

	const [data, total] = await Promise.all([
		prisma.problem.findMany({
			where,
			skip,
			take: limit,
			select: LIST_SELECT,
			orderBy: { createdAt: "desc" },
		}),
		prisma.problem.count({ where }),
	]);

	return { data, total };
};

const findBySlug = async (slug: string) => {
	return prisma.problem.findUnique({
		where: { slug },
		select: FULL_SELECT,
	});
};

const findById = async (id: string) => {
	return prisma.problem.findUnique({
		where: { id },
		select: { id: true, slug: true },
	});
};

const slugExists = async (slug: string, excludeId?: string): Promise<boolean> => {
	const found = await prisma.problem.findUnique({
		where: { slug },
		select: { id: true },
	});
	if (!found) return false;
	if (excludeId !== undefined && found.id === excludeId) return false;
	return true;
};

// BunSQLiteAdapter v1.3.1 does not support connection reservation, which Prisma
// requires for nested relational writes (connect/set). Tags are managed via
// direct $executeRaw on the implicit junction table instead.

const connectTags = async (problemId: string, tagIds: string[]): Promise<void> => {
	await Promise.all(
		tagIds.map((tagId) =>
			prisma.$executeRaw`INSERT OR IGNORE INTO "_ProblemToTag" ("A", "B") VALUES (${problemId}, ${tagId})`
		)
	);
};

const create = async ({ tagIds, ...rest }: CreateProblemData) => {
	const { id } = await prisma.problem.create({
		data: rest,
		select: { id: true },
	});

	if (tagIds.length > 0) {
		await connectTags(id, tagIds);
	}

	return prisma.problem.findUniqueOrThrow({
		where: { id },
		select: FULL_SELECT,
	});
};

const update = async (id: string, { tagIds, ...rest }: UpdateProblemData) => {
	await prisma.problem.update({
		where: { id },
		data: rest,
		select: { id: true },
	});

	if (tagIds !== undefined) {
		await prisma.$executeRaw`DELETE FROM "_ProblemToTag" WHERE "A" = ${id}`;
		if (tagIds.length > 0) {
			await connectTags(id, tagIds);
		}
	}

	return prisma.problem.findUniqueOrThrow({
		where: { id },
		select: FULL_SELECT,
	});
};

const remove = async (id: string) => {
	return prisma.problem.delete({ where: { id } });
};

export const problemRepository = {
	findMany,
	findBySlug,
	findById,
	slugExists,
	create,
	update,
	remove,
};
