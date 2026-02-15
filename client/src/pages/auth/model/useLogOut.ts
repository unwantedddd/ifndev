import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async () => {
            await axios.post("http://localhost:3000/api/auth/logout", {}, {
                withCredentials: true,
            });
        },
        onSuccess: () => {
            queryClient.setQueryData(["user"], null);
        },
        onError: (error) => {
            console.error("LogOut error:", error);
            queryClient.setQueryData(["user"], null);
        },
    });

    return {
        logout: mutation.mutate,
        isLoading: mutation.isPending,
        error: mutation.error,
    };
};