import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

export const RequiresAuth = ({ children }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth.isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
