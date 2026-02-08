import type { Request } from "express";

export interface MutatedRequest extends Request {
	userId?: string;
}
