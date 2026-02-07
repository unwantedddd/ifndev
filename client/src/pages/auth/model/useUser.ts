import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUser = () => {
	const fetchUser = () => {
		const user = axios.post("user");

		return user;
	};

	const loginMutation = useMutation({
		mutationFn: fetchUser,
		mutationKey: ["login"],
	});

	const data = loginMutation.mutateAsync();

	return data;
};
