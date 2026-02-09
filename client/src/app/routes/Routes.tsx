import { createBrowserRouter, type RouteObject } from "react-router";
import { ProtectedRoute } from "@/features/auth";
import { LogIn, SignUp } from "@/pages/auth";
import { Home } from "@/pages/home";
import { TestPlayground } from "@/pages/playground";
import { AuthLayout, HomeLayout, PlaygroundLayout } from "./RouteLayouts";

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
  path: "auth",
  children: [
    {
      path: "log-in",
      element: <LogIn />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
  ],
};

const playgroundRoute: RouteObject = {
  element: <PlaygroundLayout />,
  path: "playground",
  children: [
    {
      path: "test",
      element: <TestPlayground />,
    },
  ],
};

const defaultRoutes: RouteObject[] = [homeRoute, authRoute, playgroundRoute];

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
