import { RouteObject } from "react-router-dom";
import PATHS from "./paths";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Landing from "@pages/Landing/Landing";

// Public Routes - No authentication needed
export const publicRoutes: RouteObject[] = [
  {
    path: PATHS.LANDING,
    element: <MainLayout />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: PATHS.MARKETPLACE,
        element: <h1>Market Page</h1>,
      },
    ],
  },
];

// Protected Routes - Require wallet connections
export const protectedRoutes: RouteObject[] = [
  {
    path: PATHS.DASHBOARD,
    element: <h1>Dashboard Page</h1>,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        index: true,
        element: <h1>Dashboard Page</h1>,
      },
    ],
  },
];
