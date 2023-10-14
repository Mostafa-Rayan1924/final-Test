import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/Auth";
import Login from "./Login";

const RequireAuth = ({ children }) => {
  let { auth, setAuth } = useContext(authContext);

  return auth.token ? <Outlet /> : <Login />;
};

export default RequireAuth;
