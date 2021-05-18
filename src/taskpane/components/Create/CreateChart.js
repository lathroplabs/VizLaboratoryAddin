import React, { useContext } from "react";
import { PrimaryButton, Label } from "office-ui-fabric-react";
import ChartFigContext from "../../chartFigs/ChartFigContext";
import { arrayToJSONObject } from "../../utils/utils";

export default function CreateChartButton() {
  const { chartFig, setChartFig } = useContext(ChartFigContext);

  return (
    <div className="centered">
      <Label>Create Chart </Label>
      <PrimaryButton text="Create" onClick={plotlyResponsive} allowDisabledFocus />
    </div>
  );

  async function getSelected() {
    console.log('in getSelected')
    await Excel.run(async context => {
      var range = context.workbook.getSelectedRange();
      range.load("values");
      await context.sync();
      const chartData = range.values
      const jsonData = arrayToJSONObject(chartData);
      const df = new dfd.DataFrame(jsonData);
      console.log('chart data', df)
      
    });
  }

  function plotlyResponsive() {
    
    const TESTER = document.getElementById('tester');
    var trace1 = {
      y: [8, 54, 93, 116, 137, 184],
      x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      mode: 'lines',
      name: 'Bears'
    };
    
    var trace2 = {
      y: [150, 77, 32, 11, 6, 1],
      x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      mode: 'lines',
      name: 'Dolphins'
    };
    
    var trace3 = {
      y: [80, 54, 100, 76, 93, 72],
      x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      mode: 'lines',
      name: 'Whales'
    };
    
    var data = [ trace1, trace2, trace3 ];
    
    var layout = { 
      title: 'Chart Title',
      xaxis: {
        title: 'month'
      },
      yaxis: {
        title: 'count'
      },
      font: {size: 16}
    };
  
    var config = {
      //showLink: true,
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
    
    //Plotly.plot(TESTER, fig );
  }
}

