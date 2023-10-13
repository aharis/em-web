import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

const CheckIfLoged = function () {
  const { auth } = useAuth();
  const location = useLocation();

  if (auth.token) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default CheckIfLoged;
