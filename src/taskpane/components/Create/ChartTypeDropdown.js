import React, { useContext } from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { scatterBasic } from "../../chartConfigs/scatter";

export default function ChartTypeDropdown() {
  
  const templates = [scatterBasic];

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
    const chartType = option["key"];
    console.log('chart type selected', chartType)
  }
}
