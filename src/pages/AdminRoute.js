import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ userLoggedIn, path = "/", children }) => {
  if (!userLoggedIn.user_type) {
    return <Navigate to={path} replace />;
  }
  return children;
};

export default AdminRoute;
