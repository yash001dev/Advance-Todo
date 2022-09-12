import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function ProtectedRoute({ children }) {
  // const { user } = useAuth();
  let { user } = useAuth();
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
