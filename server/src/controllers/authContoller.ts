import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { prisma } from "../config/database.ts";
import { error } from "../config/logger.ts";

if (!process.env.JWT_SECRET) {
	throw new Error("JWT_SECRET is not defined in the environment variables.");
}

const signUpSchema = z.strictObject({
	email: z.email(),
	username: z.string().min(3),
	password: z.string().min(6),
});

export const signUp = async (req: Request, res: Response) => {
	try {
		const { email, username, password } = signUpSchema.parse(req.body);

		const existingUser = await prisma.user.findFirst({
			where: {
				OR: [{ email: email }, { username: username }],
			},
			select: { id: true },
		});

		if (existingUser) {
			return res.status(409).json({ error: "User already exists" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const user = await prisma.user.create({
			data: {
				email,
				username,
				password_hash: hashedPassword,
			},
			select: { id: true },
		});

		const isProduction = process.env.NODE_ENV === "production";

		const jwtToken = jwt.sign(
			{ id: user.id },
			process.env.JWT_SECRET as string,
			{
				expiresIn: "7d",
			},
		);

		res.cookie("authToken", jwtToken, {
			httpOnly: true,
			secure: isProduction,
			sameSite: isProduction ? "strict" : "lax",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		return res.status(201).json({ message: "User registered successfully" });
	} catch (err) {
		if (err instanceof z.ZodError) {
			return res.status(400).json({
				error: "Validation failed",
				details: err.issues.map((e) => ({
					field: e.path[0],
					message: e.message,
				})),
			});
		}

		error("SignUp error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

const loginSchema = z.strictObject({
	identifier: z.string().min(1, "Email or Username is required"),
	password: z.string().min(1, "Password is required"),
});

export const logIn = async (req: Request, res: Response) => {
	try {
		const { identifier, password } = loginSchema.parse(req.body);

		const user = await prisma.user.findFirst({
			where: {
				OR: [{ email: identifier }, { username: identifier }],
			},
			select: {
				id: true,
				email: true,
				username: true,
				password_hash: true,
			},
		});

		const invalidCredentialsMsg = "Invalid email/username or password";

		if (!user) {
			return res.status(401).json({ error: invalidCredentialsMsg });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password_hash);

		if (!isPasswordValid) {
			return res.status(401).json({ error: invalidCredentialsMsg });
		}

		// Generate Token
		const isProduction = process.env.NODE_ENV === "production";
		const jwtToken = jwt.sign(
			{ id: user.id },
			process.env.JWT_SECRET as string,
			{
				expiresIn: "7d",
			},
		);

		res.cookie("authToken", jwtToken, {
			httpOnly: true,
			secure: isProduction,
			sameSite: isProduction ? "strict" : "lax",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		return res.status(200).json({
			message: "Logged in successfully",
		});
	} catch (err) {
		if (err instanceof z.ZodError) {
			return res.status(400).json({
				error: "Validation failed",
				details: err.issues.map((e) => ({
					field: e.path[0],
					message: e.message,
				})),
			});
		}
		error("Login error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export const getMe = async (req: Request, res: Response) => {
	try {
		// TODO: Implement logic of middleware, and get me
		const userId = req.userId;

		const user = await prisma.user.findUnique({
			where: { id: userId },
			select: {
				id: true,
				email: true,
				username: true,
				created_at: true,
			},
		});

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		return res.status(200).json({ user });
	} catch (err) {
		error("GetMe error:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};
