import React, { useContext } from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { scatterBasic } from "../../chartConfigs/scatter";
import { lineBasic } from "../../chartConfigs/line";
import { barBasic, barStacked } from "../../chartConfigs/bar";

export default function ChartTypeDropdown({setChartTemplate}) {
  
  const templates = {
    "ScatterBasic": scatterBasic,
    "LineBasic": lineBasic,
    "BarBasic": barBasic,
    "BarStacked": barStacked
  };

  const chartTypeOptions = [
    { key: "ScatterBasic", text: "Basic Scatter Plot" },
    { key: "LineBasic", text: "Basic Line Plot" },
    { key: "BarBasic", text: "Basic Bar Plot" },
    { key: "BarStacked", text: "Stacked Bar Plot" },
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
    const chartTemp = templates[chartTypeKey]
    setChartTemplate(chartTemp)
    
  }
}
