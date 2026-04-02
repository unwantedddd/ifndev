import type { Request, Response } from "express";
import { prisma } from "../config/database.ts";
import type { MutatedRequest } from "../types/authTypes.ts";
import type { Prisma } from "../../generated/prisma/client.ts";

if (!process.env.JWT_SECRET) {
	throw new Error("JWT_SECRET is not defined in the environment variables.");
}

export const getProfile = async (req: MutatedRequest, res: Response) => {
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                createdAt: true,
                bio: true,
                avatar_url: true,
                description: true,

            },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateAvatar = async (req: MutatedRequest, res: Response) => {
    const userId = req.userId;
    const { avatar_url } = req.body;

    const file = req.file;

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        let finalAvatarUrl: string;

        if (file) {
            finalAvatarUrl = `/uploads/${file.filename}`;
        } else if (avatar_url) {
            finalAvatarUrl = avatar_url;
        } else {
            return res.status(400).json({ message: "Please upload a file or provide an avatar URL" });
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { 
                avatar_url: finalAvatarUrl 
            },
            select: {
                id: true,
                username: true,
                email: true,
                avatar_url: true,
                bio: true,
            }
        });

        return res.status(200).json({ 
            message: "Avatar updated successfully", 
            user: updatedUser 
        });

    } catch (error) {
        console.error("Error updating avatar:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const batchUpdateProfile = async (req: MutatedRequest, res: Response) => {
    const userId = req.userId;

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const file = req.file;

    if (file) {
        const uploadedAvatarUrl = `http:localhost:3000/static/images/${file.filename}`;
        req.body.avatarUrl = uploadedAvatarUrl;
    }

    const { username, email, avatar_url, description, role, avatarUrl } = req.body;

    const updateData: Prisma.UserUpdateInput = {
        ...(username && { username }),
        ...(email && { email }),
        ...(avatar_url && { avatar_url }),
        ...(description && { description }),
        ...(role && { role }),
        ...(avatarUrl && { avatar_url: avatarUrl }),
    };

    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: updateData,
            select: {
                id: true,
                username: true,
                email: true,
                avatar_url: true,
                description: true,
                role: true
            }
        });

            return res.status(200).json({ message: "Profile updated!"});
        
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }

};
