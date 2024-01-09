import React from "react";
import { useAuth } from "../context";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import Laoding from "../components/Loading";

const Routes = () => {
  const { isAuthenticated, loadingAuth } = useAuth();

  if (loadingAuth) {
    return <Laoding />;
  }

  return isAuthenticated ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
