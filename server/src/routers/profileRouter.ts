import express from "express";
import {
	getProfile,
	updateAvatar,
	batchUpdateProfile,
	deleteProfile,
} from "../controllers/profileController.ts";
import { authMiddleware } from "../middlewares/authMiddleware.ts";
import { upload } from "../middlewares/fileUploadMiddleware.ts";

const router = express.Router();

router.get("/getProfile", authMiddleware, getProfile);
router.post("/updateAvatar", authMiddleware, upload.single("avatar"), updateAvatar);
router.post("/updateProfile", authMiddleware, upload.single("avatar"), batchUpdateProfile);
router.post("/deleteProfile", authMiddleware, deleteProfile);

export default router;
