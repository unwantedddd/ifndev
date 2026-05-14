import { problemRepository } from "../repositories/problemRepository.ts";
import type { CreateProblemInput, UpdateProblemInput, ProblemQueryInput } from "../validators/problemValidators.ts";

const generateSlug = (title: string): string =>
	title
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.trim();

const buildUniqueSlug = async (title: string, excludeId?: string): Promise<string> => {
	const base = generateSlug(title);
	let slug = base;
	let counter = 1;

	while (await problemRepository.slugExists(slug, excludeId)) {
		slug = `${base}-${counter}`;
		counter++;
	}

	return slug;
};

const list = async (query: ProblemQueryInput) => {
	const { data, total } = await problemRepository.findMany(query);
	return {
		data,
		total,
		page: query.page,
		limit: query.limit,
		totalPages: Math.ceil(total / query.limit),
	};
};

const getBySlug = async (slug: string) => {
	return problemRepository.findBySlug(slug);
};

const create = async (input: CreateProblemInput) => {
	const slug = await buildUniqueSlug(input.title);

	return problemRepository.create({
		title: input.title,
		slug,
		description: input.description,
		difficulty: input.difficulty,
		testCases: input.testCases,
		...(input.timeLimit !== undefined && { timeLimit: input.timeLimit }),
		...(input.memoryLimit !== undefined && { memoryLimit: input.memoryLimit }),
		tagIds: input.tagIds ?? [],
	});
};

const update = async (id: string, input: UpdateProblemInput) => {
	const existing = await problemRepository.findById(id);
	if (!existing) return null;

	const slug =
		input.title !== undefined
			? await buildUniqueSlug(input.title, id)
			: undefined;

	return problemRepository.update(id, {
		...input,
		...(slug !== undefined && { slug }),
	});
};

const remove = async (id: string): Promise<boolean> => {
	const existing = await problemRepository.findById(id);
	if (!existing) return false;

	await problemRepository.remove(id);
	return true;
};

export const problemService = { list, getBySlug, create, update, remove };
