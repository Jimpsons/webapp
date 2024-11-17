import { FC } from "react";
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";
import { publicRoutes, protectedRoutes } from "./routes";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  // Public routes don't need protection
  ...publicRoutes,

  // Wrapping protected routes in PrivateRoute component
  {
    element: <PrivateRoute children={<h1>Private Route Compoenent</h1>} />,
    children: protectedRoutes,
  },
]);

// Router Provider component
export const RouterProvider: FC = () => {
  return <ReactRouterProvider router={router} />;
};
