// ProtectedRoute.js
import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user, allowedRoles, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !allowedRoles.includes(user.role)) {
      navigate("/error");
    }
  }, [user, allowedRoles, navigate]);

  return user && allowedRoles.includes(user.role) ? <Outlet /> : null;
};

export default ProtectedRoute;
