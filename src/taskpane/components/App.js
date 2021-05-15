import React from "react";
import Header from "./Header";
import { UserProvider } from "../users/UserContext";
import { AuthProvider } from "../users/AuthContext";

import PivotMenu from "./PivotMenu";

export default function App() {
  
  return (
    <UserProvider>
      <AuthProvider>
        <div>
          <Header logo="assets/viztext.png" title="" message=" " />
          <PivotMenu />
        </div>
      </AuthProvider>
    </UserProvider>
  );
}