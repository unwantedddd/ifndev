import express from "express";
import { getMe, logIn, signUp } from "../controllers/authContoller.ts";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/log-in", logIn);
router.get("/me", getMe);

export default router;
