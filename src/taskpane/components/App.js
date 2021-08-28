import React from "react";
import Header from "./Header";
import { UserProvider } from "../users/UserContext";
import { AuthProvider } from "../users/AuthContext";
import { ChartFigProvider } from '../chartFigs/ChartFigContext'

import PivotMenu from "./PivotMenu";

export default function App() {
  
  return (
    <UserProvider>
      <AuthProvider>
        <ChartFigProvider>
          <div>
            <Header logo="https://predictionlaboratory.com/assets/viztext.png" title="" message=" " />
            <PivotMenu />
          </div>
        </ChartFigProvider>
      </AuthProvider>
    </UserProvider>
  );
}