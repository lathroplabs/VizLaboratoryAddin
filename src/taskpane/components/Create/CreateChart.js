import React, { useContext } from "react";
import { PrimaryButton, Label, TextField } from "office-ui-fabric-react";
import ChartFigContext from "../../chartFigs/ChartFigContext";
import { selectionToDF, getTraces } from "../../utils/utils";
import ChartTypeDropdown from './ChartTypeDropdown';

export default function CreateChartButton() {
  const { chartFig, setChartFig } = useContext(ChartFigContext);

  let layout = { 
    title: 'Chart Title',
    xaxis: {
      title: 'month'
    },
    yaxis: {
      title: 'count'
    },
    font: {size: 16}
  };

  const config = {
    plotlyServerURL: "https://chart-studio.plotly.com",
    responsive: true,
    modeBarButtonsToRemove: ['toImage'],
    showEditInChartStudio: true,
  };

  return (
    <div className="centered">
      <Label>Create Chart </Label>
      <ChartTypeDropdown />
      <TextField label="Chart Title" id="title-input" />
      <TextField label="X Axis Label" id="x-label-input" />
      <TextField label="Y Axis Label" id="y-label-input" />
      <PrimaryButton text="Create" onClick={updateChartFig} allowDisabledFocus />
    </div>
  );

  async function updateChartFig() {
    const df = await selectionToDF()
    const data = getTraces(df, 'bar')
  
    const fig = {
      data: data,
      layout: layout,
      config: config
    }
  
    setChartFig(fig)
  }
}

