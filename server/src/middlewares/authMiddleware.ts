import type { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { logError } from "../config/logger.ts";
import type { MutatedRequest } from "../types/authTypes.ts";

if (!process.env.JWT_SECRET) {
	throw new Error("JWT_SECRET is not defined in the environment variables.");
}

export const authMiddleware = (
	req: MutatedRequest,
	res: Response,
	next: NextFunction,
) => {
	const authToken = req.cookies.authToken;

	if (!authToken) {
		return res.status(401).json({ error: "Unauthorized" });
	}

	try {
		const decoded = jwt.verify(authToken, String(process.env.JWT_SECRET)) as {
			id: string;
		};

		req.userId = decoded.id;

		next();
	} catch (err) {
		logError("Authentication error:", err);
		return res.status(401).json({ error: "Unauthorized" });
	}
};
