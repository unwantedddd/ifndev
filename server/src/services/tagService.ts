import { tagRepository } from "../repositories/tagRepository.ts";
import type { CreateTagInput } from "../validators/tagValidators.ts";

const list = async () => {
	return tagRepository.findAll();
};

const create = async (input: CreateTagInput) => {
	const existing = await tagRepository.findByName(input.name);
	if (existing) return { tag: null, conflict: true as const };

	const tag = await tagRepository.create(input.name);
	return { tag, conflict: false as const };
};

const remove = async (id: string): Promise<boolean> => {
	const existing = await tagRepository.findById(id);
	if (!existing) return false;

	await tagRepository.remove(id);
	return true;
};

export const tagService = { list, create, remove };
