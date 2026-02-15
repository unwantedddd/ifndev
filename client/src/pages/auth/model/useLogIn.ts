import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios"

export const useLogIn = () => {
    const queryClient = useQueryClient();

    const fetchLogIn = async (data: any) => {
        try {
            await axios.post("http://localhost:3000/api/auth/log-in", data, {
                withCredentials: true,
            });
        }
        catch (error) {
            console.error("Failed to log in:", error);
            throw error;
        };
    };

    const logIn = useMutation({
        mutationFn: fetchLogIn,
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["user"] })
        },
    });
    
    return logIn;
};
