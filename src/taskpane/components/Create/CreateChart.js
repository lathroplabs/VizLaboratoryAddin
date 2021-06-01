import React, { useContext, useState } from "react";
import { PrimaryButton, Label, TextField, MessageBar, MessageBarType } from "office-ui-fabric-react";
import ChartFigContext from "../../chartFigs/ChartFigContext";
import { selectionToDF, getTraces } from "../../utils/utils";
import ChartTypeDropdown from './ChartTypeDropdown';

export default function CreateChartButton() {
  const { chartFig, setChartFig } = useContext(ChartFigContext);
  const [chartTemplate, setChartTemplate] = useState({});
  const [chartSelectedError, setChartSelectedError] = useState(false);
  const [dataSelectedError, setDataSelectedError] = useState(false);
  const [chartCreated, setChartCreated] = useState(false);

  let layout = { 
    title: 'Chart Title',
    xaxis: {
      title: ''
    },
    yaxis: {
      title: ''
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
      {dataSelectedError && (
        <MessageBar
          messageBarType={MessageBarType.error}
          isMultiline={false}
          onDismiss={() => setDataSelectedError(false)}
          dismissButtonAriaLabel="Close"
        >
          Please select the data for the Chart.
        </MessageBar>
      )}
      {chartSelectedError && (
        <MessageBar
          messageBarType={MessageBarType.error}
          isMultiline={false}
          onDismiss={() => setChartSelectedError(false)}
          dismissButtonAriaLabel="Close"
        >
          Please Select a Chart Type.
        </MessageBar>
      )}
      <TextField label="Chart Title" id="title-input" defaultValue={chartFig ? chartFig.layout.title.text : ""} />
      <TextField label="X Axis Label" id="x-label-input" defaultValue={chartFig ? chartFig.layout.xaxis.title.text : ""} />
      <TextField label="Y Axis Label" id="y-label-input" defaultValue={chartFig ? chartFig.layout.yaxis.title.text : ""} />
      <br></br>
      {chartCreated && (
        <MessageBar
          messageBarType={MessageBarType.success}
          isMultiline={false}
          onDismiss={() => setChartCreated(false)}
          dismissButtonAriaLabel="Close"
        >
          The chart has been created. Click the 'View' tab to review. 
        </MessageBar>
      )}
      <PrimaryButton text="Create" onClick={updateChartFig} allowDisabledFocus />
    </div>
  );

  async function updateChartFig() {
    // Check to see if chart type was selected
    if (Object.keys(chartTemplate).length === 0) {
      setChartSelectedError(true)
      return
    }
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
    console.log('df', df.data[0].length)
    if (!df || df.data[0].length < 2) {
      setDataSelectedError(true)
      return
    }
    const data = getTraces(df, trace)
    
    const fig = {
      data: data,
      layout: layout,
      config: config
    }
  
    setChartFig(fig)
    setChartCreated(true)

  }
}

