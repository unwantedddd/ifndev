import express from "express";
import { getProfile, updateAvatar } from "../controllers/profileController.ts";
import { upload } from "../middlewares/fileUploadMiddleware.ts";

const router = express.Router();

router.post("/updateAvatar", upload.single("avatar"), updateAvatar);
router.get("/getProfile", getProfile);

export default router;
