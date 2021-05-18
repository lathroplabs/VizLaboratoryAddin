import React, { useContext } from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { scatterBasic } from "../../chartConfigs/scatter";

export default function ChartTypeDropdown({setChartType}) {
  
  const templates = {
    "ScatterBasic": scatterBasic,
    "ScatterBasic2": scatterBasic,
  };

  const chartTypeOptions = [
    { key: "ScatterBasic", text: "Basic Scatter Plot" },
    { key: "ScatterBasic2", text: "Labeled Scatter Plot" }
  ];

  return (
    <div id="chart-type-dropdown">
      <Dropdown
        placeholder="Select Chart"
        label="Select a Chart Type"
        options={chartTypeOptions}
        onChange={handleChoice}
        required={true}
      />
    </div>
  );

  function handleChoice(ev, option) {
    const chartTypeKey = option["key"];
    const chart_type = templates[chartTypeKey]
    setChartType(chart_type)
    //console.log('chart type selected', chartType)
  }
}
