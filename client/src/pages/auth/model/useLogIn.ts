import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/shared/api/axiosInstance";

type LogInPayload = { email: string; password: string };

export const useLogIn = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: LogInPayload) => {
            try {
                await api.post("/auth/log-in", data);
            } catch (error) {
                console.error("Failed to log in:", error);
                throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user"] });
        },
    });
};
