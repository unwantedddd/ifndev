import { createBrowserRouter, type RouteObject } from "react-router";
import { ProtectedRoute } from "@/features/auth";
import { LogIn } from "@/pages/auth";
import { Home } from "@/pages/home";
import { HomeLayout } from "./RouteLayouts";

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
	path: "/auth",
	children: [
		{
			path: "login",
			element: <LogIn />,
		},
	],
};

const defaultRoutes: RouteObject[] = [homeRoute];

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
