import path from "node:path";
import { config } from "dotenv";
import { defineConfig } from "prisma/config";

config({ path: path.resolve(__dirname, "../.env") });

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not defined in the environment variables.");
}

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations",
	},
	datasource: {
		url: process.env.DATABASE_URL ?? "",
	},
});
