import { useQuery } from "@tanstack/react-query";
import api from "@/shared/api/axiosInstance";

export const useAuth = () => {
    const query = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                const { data } = await api.get("/auth/me");
                return data;
            } catch {
                return null;
            }
        },
    });

    return {
        ...query,
        isAuthenticated: !!query.data,
    };
};