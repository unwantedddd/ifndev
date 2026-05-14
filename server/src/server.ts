import path from "node:path";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { prisma } from "./config/database.ts";

import authRouter from "./routers/authRouter.ts";
import labRouter from "./routers/labRouter.ts";
import profileRouter from "./routers/profileRouter.ts";
import problemRouter from "./routers/problemRouter.ts";
import submissionRouter from "./routers/submissionRouter.ts";
import tagRouter from "./routers/tagRouter.ts";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: ["http://localhost:5173", "https://arteecool.com.ua", "https://h7s7dhwx-5173.euw.devtunnels.ms"],
	}),
);
app.use(cookieParser());

app.use("/static/images", express.static(path.join(process.cwd(), "../", "images")));

app.use("/api/auth", authRouter);
app.use("/api/lab", labRouter);
app.use("/api/profile", profileRouter);
app.use("/api/problems", problemRouter);
app.use("/api/submissions", submissionRouter);
app.use("/api/tags", tagRouter);

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
