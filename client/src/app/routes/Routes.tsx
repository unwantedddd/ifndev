import { createBrowserRouter, type RouteObject } from "react-router";
import { ProtectedRoute } from "@/features/auth";
import { LogIn, SignUp } from "@/pages/auth";
import { Home } from "@/pages/home";
import { TestPlayground } from "@/pages/playground";
import { Forum } from "@/pages/forum";
import { Problems, CreateProblem, ProblemDetail } from "@/pages/problems";
import { AboutUs, Careers, Blog } from "@/pages/company";
import { Customers, Pricing, Newability } from "@/pages/product";
import { Contacts, Community } from "@/pages/resources";
import { Articles } from "@/pages/articles";
import { PageNotFound } from "@/pages/error";
import { AuthLayout, ForumLayout, HomeLayout, PlaygroundLayout, ProblemsLayout, CompanyLayout, ResourcesLayout, ProductLayout, ArticlesLayout, PageNotFoundLayout, ProfileLayout } from "./RouteLayouts";
import ProfilePage from "@/pages/profile/ui/Profile";

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
      index: true,
      element: <PageNotFound />,
    },
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
      index: true,
      element: <PageNotFound />,
    },
    {
      path: "test",
      element: <TestPlayground />,
    },
  ],
};

const articlesRoute: RouteObject = {
  element: <ArticlesLayout />,
  path: "articles",
  children: [
    {
      index: true,
      element: <Articles />,
    },
  ],
};

const forumRoute: RouteObject = {
  element: <ForumLayout />,
  path: "forum",
  children: [
    {
      index: true,
      element: <Forum />,
    },
  ],
};

const problemsRoute: RouteObject = {
  element: <ProblemsLayout />,
  path: "problems",
  children: [
    {
      index: true,
      element: <Problems />,
    },
    {
      path: "create-problem",
      element: <CreateProblem />,
    },
    {
      path: ":slug",
      element: <ProblemDetail />,
    },
  ],
};

const companyRoute: RouteObject = {
  element: <CompanyLayout />,
  path: "company",
  children: [
    {
      index: true,
      element: <PageNotFound />,
    },
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
      index: true,
      element: <PageNotFound />,
    },
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
      index: true,
      element: <PageNotFound />,
    },
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

const errorRoute: RouteObject = {
  element: <PageNotFoundLayout />,
  path: "*",
  children: [
    {
      path: "*",
      element: <PageNotFound />,
    },
  ],
};

const profileRoute: RouteObject = {
  element: <ProfileLayout/>,
  path: "profile",
  children: [
    {
      index: true,
      element: <ProfilePage />,
    },
  ],
};

const defaultRoutes: RouteObject[] = [homeRoute, authRoute, playgroundRoute, forumRoute, problemsRoute, companyRoute, productRoute, resourcesRoute, articlesRoute, errorRoute];

const protectedRoutes: RouteObject[] = [profileRoute];

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
