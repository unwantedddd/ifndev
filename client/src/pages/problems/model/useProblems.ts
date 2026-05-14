import { useQuery } from "@tanstack/react-query";
import api from "@/shared/api/axiosInstance";
import type { Difficulty, PaginatedResponse, ProblemListItem } from "@/shared/api/types";

type ProblemsFilters = {
    page?: number;
    limit?: number;
    difficulty?: Difficulty;
    tag?: string;
    search?: string;
};

export const useProblems = (filters: ProblemsFilters = {}) => {
    return useQuery<PaginatedResponse<ProblemListItem>>({
        queryKey: ["problems", filters],
        queryFn: async () => {
            try {
                const { data } = await api.get<PaginatedResponse<ProblemListItem>>("/problems", {
                    params: filters,
                });
                return data;
            } catch (error) {
                console.error("Failed to fetch problems:", error);
                throw error;
            }
        },
    });
};
