import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  let token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" replace={true} />;
};

export default RequireAuth;
