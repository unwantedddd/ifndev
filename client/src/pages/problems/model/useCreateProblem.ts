import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import api from "@/shared/api/axiosInstance";
import type { Difficulty, Problem } from "@/shared/api/types";

type CreateProblemPayload = {
    title: string;
    description: string;
    difficulty: Difficulty;
    testCases: string;
    tagIds?: string[];
    timeLimit?: number;
    memoryLimit?: number;
};

export type CreateProblemError = {
    error: string;
    details?: { field: string; message: string }[];
};

export const useCreateProblem = () => {
    const queryClient = useQueryClient();

    return useMutation<Problem, axios.AxiosError<CreateProblemError>, CreateProblemPayload>({
        mutationFn: async (payload) => {
            console.log("[useCreateProblem] payload:", JSON.stringify(payload, null, 2));
            const { data } = await api.post<{ data: Problem }>("/problems", payload);
            return data.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["problems"] });
        },
    });
};
