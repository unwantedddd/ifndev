import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
    const query = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/auth/me", {
                    withCredentials: true,
                });
                return response.data;
            } catch (error) {
                return null;
            }
        },
    });

    return {
        ...query,
        isAuthenticated: !!query.data,
    };
};