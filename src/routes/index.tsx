import React from "react";
import { useAuth } from "../context";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
