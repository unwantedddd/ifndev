import { useQuery } from "@tanstack/react-query";
import api from "@/shared/api/axiosInstance";
import type { Problem } from "@/shared/api/types";

export const useProblem = (slug: string) => {
    return useQuery<Problem>({
        queryKey: ["problem", slug],
        queryFn: async () => {
            try {
                const { data } = await api.get<{ data: Problem }>(`/problems/${slug}`);
                return data.data;
            } catch (error) {
                console.error("Failed to fetch problem:", error);
                throw error;
            }
        },
        enabled: Boolean(slug),
    });
};
