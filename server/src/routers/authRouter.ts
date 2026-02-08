import express from "express";
import { getMe, logIn, signUp } from "../controllers/authContoller.ts";
import { authMiddleware } from "../middlewares/authMiddleware.ts";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/log-in", logIn);
router.get("/me", authMiddleware, getMe);

export default router;
