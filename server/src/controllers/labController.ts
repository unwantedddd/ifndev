import type { Request, Response } from "express";
import { labService, type ReadMethod } from "../services/labService.ts";

export const getLabData = async (req: Request, res: Response) => {
    try {
        const method = (req.query.method as ReadMethod) || "async";

        const tasks = await labService.getTasks(method);

        return res.status(200).json({
            success: true,
            method_used: method,
            count: tasks.length,
            data: tasks,
        });
    } catch (error) {
        console.error("Error in LabController:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};