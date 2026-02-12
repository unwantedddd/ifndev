import { createBrowserRouter, type RouteObject } from "react-router";
import { ProtectedRoute } from "@/features/auth";
import { LogIn, SignUp } from "@/pages/auth";
import { Home } from "@/pages/home";
import { TestPlayground } from "@/pages/playground";
import { Forum } from "@/pages/forum";
import { Problems, CreateProblem } from "@/pages/problems";
import { AboutUs, Careers, Blog } from "@/pages/company";
import { Customers, Pricing, Newability } from "@/pages/product";
import { Contacts, Community } from "@/pages/resources";
import { AuthLayout, ForumLayout, HomeLayout, PlaygroundLayout, ProblemsLayout, CompanyLayout, ResourcesLayout, ProductLayout } from "./RouteLayouts";

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

const forumRoute: RouteObject = {
  element: <ForumLayout />,
  path: "forum",
  children: [
    {
      path: "test",
      element: <Forum />,
    },
  ],
};

const problemsRoute: RouteObject = {
  element: <ProblemsLayout />,
  path: "problems",
  children: [
    {
      path: "test",
      element: <Problems />,
    },
    {
      path: "create-problem",
      element: <CreateProblem />,
    },
  ],
};

const companyRoute: RouteObject = {
  element: <CompanyLayout />,
  path: "company",
  children: [
    {
      path: "about-us",
      element: <AboutUs />,
    },
    {
      path: "careers",
      element: <Careers />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
  ],
};

const productRoute: RouteObject = {
  element: <ProductLayout />,
  path: "product",
  children: [
    {
      path: "newability",
      element: <Newability />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
    {
      path: "customers",
      element: <Customers />,
    },
  ],
};

const resourcesRoute: RouteObject = {
  element: <ResourcesLayout />,
  path: "resources",
  children: [
    {
      path: "contacts",
      element: <Contacts />,
    },
    {
      path: "community",
      element: <Community />,
    },
  ],
};

const defaultRoutes: RouteObject[] = [homeRoute, authRoute, playgroundRoute, forumRoute, problemsRoute, companyRoute, productRoute, resourcesRoute];

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
