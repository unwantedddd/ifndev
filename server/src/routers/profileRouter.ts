import express from "express";
import { getProfile, updateAvatar } from "../controllers/profileController.ts";
import { upload } from "../middlewares/fileUploadMiddleware.ts";

const router = express.Router();

router.post("/updateAvatar", upload.single("avatar"), updateAvatar);
router.get("/getProfile", getProfile);
router.post("/updateProfile", upload.single("avatar"), authMiddleware, batchUpdateProfile);\
router.post("/deleteProfile", verifyToken, deleteProfile);

export default router;
