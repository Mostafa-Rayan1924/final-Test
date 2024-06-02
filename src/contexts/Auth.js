import { createContext, useEffect, useState } from "react";
export let authContext = createContext({});

export function AuthContextProvider({ children }) {
  let [auth, setAuth] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("user"));
    if (token) {
      setAuth({ token: token, user: user });
    }
  }, []);
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
}
