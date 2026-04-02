import { Router } from "express";
import { getLabData } from "../controllers/labController.ts";

const router = Router();

router.get("/tasks", getLabData);

export default router;