import { useQuery } from "@tanstack/react-query";
import api from "@/shared/api/axiosInstance";
import type { Tag } from "@/shared/api/types";

export const useTags = () => {
    return useQuery<Tag[]>({
        queryKey: ["tags"],
        queryFn: async () => {
            try {
                const { data } = await api.get<{ data: Tag[] }>("/tags");
                return data.data;
            } catch (error) {
                console.error("Failed to fetch tags:", error);
                throw error;
            }
        },
    });
};
