import path from "node:path";
import cors from "cors";
import express from "express";
import { prisma } from "./config/database.ts";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: ["http://localhost:5173", "https://arteecool.com.ua"],
	}),
);
app.use(cookieParser());

app.use("/static/images", express.static(path.join(process.cwd(), "images")));

const start = async () => {
	try {
		await prisma.$connect();

		app.listen(Number(PORT), () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

await start();
