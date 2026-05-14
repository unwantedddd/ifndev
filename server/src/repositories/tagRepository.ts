import { prisma } from "../config/database.ts";

const findAll = async () => {
	return prisma.tag.findMany({
		select: { id: true, name: true },
		orderBy: { name: "asc" },
	});
};

const findById = async (id: string) => {
	return prisma.tag.findUnique({
		where: { id },
		select: { id: true, name: true },
	});
};

const findByName = async (name: string) => {
	return prisma.tag.findUnique({
		where: { name },
		select: { id: true, name: true },
	});
};

const create = async (name: string) => {
	return prisma.tag.create({
		data: { name },
		select: { id: true, name: true },
	});
};

const remove = async (id: string) => {
	return prisma.tag.delete({ where: { id } });
};

export const tagRepository = { findAll, findById, findByName, create, remove };
