import { BunSQLiteAdapter } from "@abcx3/prisma-bun-adapter";
import { PrismaClient } from "../../generated/prisma/client.ts";

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined in the environment variables.");
}

const adapter = new BunSQLiteAdapter({
	filename: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

export { prisma };
