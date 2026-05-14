import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/shared/api/axiosInstance";
import type { Submission, SubmissionStatus } from "@/shared/api/types";

type CreateSubmissionPayload = {
    problemId: string;
    code: string;
    language: string;
    status: SubmissionStatus;
    runtime?: number;
    memory?: number;
};

export const useCreateSubmission = () => {
    const queryClient = useQueryClient();

    return useMutation<Submission, Error, CreateSubmissionPayload>({
        mutationFn: async (payload) => {
            try {
                const { data } = await api.post<{ data: Submission }>("/submissions", payload);
                return data.data;
            } catch (error) {
                console.error("Failed to submit solution:", error);
                throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["submissions"] });
        },
    });
};
