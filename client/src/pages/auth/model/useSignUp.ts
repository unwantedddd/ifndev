import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios"

export const useSignUp = () => {
    const queryClient = useQueryClient();

    const fetchSignUp = async (data: any) => {
        try {
            await axios.post("http://localhost:3000/api/auth/sign-up", data, {
                withCredentials: true,
            });
        }
        catch (error) {
            console.error("Failed to sign up:", error);
            throw error;
        };
    };

    const signUp = useMutation({
        mutationFn: fetchSignUp,
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["user"] })
        },
    });
    
    return signUp;
};
