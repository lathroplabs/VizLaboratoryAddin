import React, { useContext, useState } from "react";
import { PrimaryButton, Label, TextField } from "office-ui-fabric-react";
import ChartFigContext from "../../chartFigs/ChartFigContext";
import { selectionToDF, getTraces } from "../../utils/utils";
import ChartTypeDropdown from './ChartTypeDropdown';

export default function CreateChartButton() {
  const { chartFig, setChartFig } = useContext(ChartFigContext);
  const [chartTemplate, setChartTemplate] = useState({});

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
      <ChartTypeDropdown setChartTemplate={setChartTemplate} />
      <TextField label="Chart Title" id="title-input" defaultValue={chartFig ? chartFig.layout.title.text : ""} />
      <TextField label="X Axis Label" id="x-label-input" defaultValue={chartFig ? chartFig.layout.xaxis.title.text : ""} />
      <TextField label="Y Axis Label" id="y-label-input" defaultValue={chartFig ? chartFig.layout.yaxis.title.text : ""} />
      <PrimaryButton text="Create" onClick={updateChartFig} allowDisabledFocus />
    </div>
  );

  async function updateChartFig() {
    // Get input data
    const chartTitle = document.getElementById("title-input").value;
    const chartXLabel = document.getElementById("x-label-input").value;
    const chartYLabel = document.getElementById("y-label-input").value;
    
    layout.title = chartTitle
    layout.xaxis.title = chartXLabel
    layout.yaxis.title = chartYLabel

    if (chartTemplate.layout) {
      layout = {
        ...layout,
        ...chartTemplate.layout
      }
    }
    
    const trace = chartTemplate.trace
    const df = await selectionToDF()
    const data = getTraces(df, trace)
  
    const fig = {
      data: data,
      layout: layout,
      config: config
    }
  
    setChartFig(fig)
  }
}

