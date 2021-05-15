import React, { createContext, useState } from "react";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  return <AuthContext.Provider value={{ auth, setAuth}}>{children}</AuthContext.Provider>;
}
