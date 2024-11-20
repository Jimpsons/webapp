/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import PATHS from "./paths";
import { RouteConfig } from "./types";

// Lazy loading components for better performance
const Landing = lazy(() => import("@/pages/Landing/Landing"));
const Marketplace = lazy(() => import("@/pages/Marketplace/Marketplace"));
const Dashboard = lazy(() => import("@/pages/Dashboard/Dashboard"));

// Layout components should be eager laoded
import MainLayout from "@/layouts/MainLayout/MainLayout";
import DashBoardLayout from "@/layouts/DashboardLayout/DashboardLayout";

// Public Routes - No authentication needed
export const publicRoutes: RouteConfig[] = [
  {
    path: PATHS.PUBLIC.LANDING,
    element: <MainLayout />,
    errorElement: <h1>Error Page</h1>, // replace with <ErrorBoundary/>
    children: [
      {
        index: true,
        element: (
          // replace with <LoadingSpinner/>
          <Suspense fallback={<h1>Loading Spinner</h1>}>
            <Landing />
          </Suspense>
        ),
      },
      {
        path: PATHS.PUBLIC.MARKETPLACE,
        element: (
          <Suspense fallback={<h1>LoadingSpinner</h1>}>
            <Marketplace />
          </Suspense>
        ),
      },
    ],
  },
];

// Protected Routes - Require wallet connections
export const protectedRoutes: RouteConfig[] = [
  {
    path: PATHS.PROTECTED.DASHBOARD,
    element: <DashBoardLayout />,
    errorElement: <h1>Error Page</h1>, // replace with <ErrorBoundary/>
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h1>LoadingSpinner</h1>}>
            <Dashboard />
          </Suspense>
        ),
        loader: async () => {
          // Fetch initial dashboard data
          // return fetchDashBoardData();
        },
      },
    ],
  },
];
