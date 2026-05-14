import express from "express";
import { listTags, createTag, deleteTag } from "../controllers/tagController.ts";
import { authMiddleware } from "../middlewares/authMiddleware.ts";

const router = express.Router();

router.get("/", listTags);
router.post("/", authMiddleware, createTag);
router.delete("/:id", authMiddleware, deleteTag);

export default router;
