import React, { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PATHS from "./paths";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  // Get wallet connection status
  const isConnected = true;

  //Get current location for redirect after login
  const location = useLocation();

  if (!isConnected) {
    return (
      <Navigate
        to={PATHS.CONNECT_WALLET}
        // Saving attempted URL for redirect after connection
        state={{ from: location }}
        replace
      />
    );
  }

  //   If connected, render the protected routes
  return <>{children}</>;
};

export default PrivateRoute;
