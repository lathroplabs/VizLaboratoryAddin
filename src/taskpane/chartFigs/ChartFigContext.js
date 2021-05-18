import React, { createContext, useState } from "react";

const ChartFigContext = createContext();
export default ChartFigContext;

export function ChartFigProvider({ children }) {
  const [chartFig, setChartFig] = useState(null);

  return <ChartFigContext.Provider value={{ chartFig, setChartFig }}>{children}</ChartFigContext.Provider>;
}
