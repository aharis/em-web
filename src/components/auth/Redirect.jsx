import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Redirect = () => {
  const { auth } = useAuth();
  return <Navigate to={auth.token ? "/dashboard" : "/login"} />;
};

export default Redirect;
