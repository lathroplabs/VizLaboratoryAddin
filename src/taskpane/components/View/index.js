import React, { useEffect, useContext } from "react";
import ChartFigContext from "../../chartFigs/ChartFigContext";

export default function ViewChart() {
  const { chartFig, setChartFig } = useContext(ChartFigContext);

  useEffect(() => {
    if (chartFig) {
      Plotly.plot("view-test", chartFig )
    }
  }, [chartFig]);

  return (
    <div id="view-test"></div>
  );
}
