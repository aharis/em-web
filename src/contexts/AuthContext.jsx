import React, { createContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = function({ children }) {
  const [auth, setAuth] = useState({
    user: JSON.parse(localStorage.getItem("user")) ?? {},
    token: localStorage.getItem("token"),
  });
  
  const value = useMemo(() => ({ auth, setAuth }), [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

