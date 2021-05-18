import React, { useContext } from "react";
import { PrimaryButton, Label } from "office-ui-fabric-react";
import ChartFigContext from "../../chartFigs/ChartFigContext";
import { selectionToDF, getTraces } from "../../utils/utils";

export default function CreateChartButton() {
  const { chartFig, setChartFig } = useContext(ChartFigContext);

  return (
    <div className="centered">
      <Label>Create Chart </Label>
      <PrimaryButton text="Create" onClick={plotlyResponsive} allowDisabledFocus />
    </div>
  );

  async function getSelected() {
    const df = await selectionToDF()
    const data = getTraces(df, 'bar')
    console.log('data', data)
    }

  async function plotlyResponsive() {
    const df = await selectionToDF()
    const data = getTraces(df, 'bar')
    
    const layout = { 
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
  
    const fig = {
      data: data,
      layout: layout,
      config: config
    }
  
    setChartFig(fig)
  }
}

