import React from "react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import Laoding from "../components/Loading";

const Routes = () => {
  const signed = true;
  const isLoading = false;

  if (isLoading) {
    return <Laoding />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
