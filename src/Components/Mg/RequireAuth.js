import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "../../contexts/Auth";

const RequireAuth = () => {
  let { auth, setAuth } = useContext(authContext);
  let token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="login" replace={true} />;
};

export default RequireAuth;
