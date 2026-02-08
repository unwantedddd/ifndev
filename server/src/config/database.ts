import { BunSQLiteAdapter } from "@abcx3/prisma-bun-adapter";
import { PrismaClient } from "../../generated/prisma/client.ts";
import path from "path";

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined in the environment variables.");
}

const dbPath = process.env.DATABASE_URL.replace(/^file:/, "");
const absolutePath = path.resolve(import.meta.dirname, "../../", dbPath);

const adapter = new BunSQLiteAdapter({
	filename: absolutePath,
	
});
const prisma = new PrismaClient({ adapter });

export { prisma };
