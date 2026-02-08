import { createBrowserRouter, type RouteObject } from "react-router";
import { ProtectedRoute } from "@/features/auth";
import { LogIn, SignUp } from "@/pages/auth";
import { Home } from "@/pages/home";
import { AuthLayout, HomeLayout } from "./RouteLayouts";

const homeRoute: RouteObject = {
	element: <HomeLayout />,
	children: [
		{
			path: "/",
			element: <Home />,
		},
	],
};

const authRoute: RouteObject = {
	element: <AuthLayout />,
	path: "/auth",
	children: [
		{
			path: "login",
			element: <LogIn />,
		},
		{
			path: "signup",
			element: <SignUp />,
		},
	],
};

const defaultRoutes: RouteObject[] = [homeRoute, authRoute];

const protectedRoutes: RouteObject[] = [];

const router = createBrowserRouter([
	{
		element: <ProtectedRoute />,
		children: protectedRoutes,
	},
	{
		children: defaultRoutes,
	},
]);

export default router;
