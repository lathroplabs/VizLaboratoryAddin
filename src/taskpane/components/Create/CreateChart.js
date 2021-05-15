import React from "react";
import { PrimaryButton, Label } from "office-ui-fabric-react";

export default function CreateChartButton() {
  return (
    <div className="centered">
      <Label>Create Chart </Label>
      <PrimaryButton text="Create" onClick={plotlyResponsive} allowDisabledFocus />
    </div>
  );
}

async function getSelected() {
  await Excel.run(async context => {
    var range = context.workbook.getSelectedRange();
    range.load("values");
    await context.sync();
    const chartData = range.values
    console.log('chart data', chartData)
  });
  
}

function testPlotly() {
  try {
    // testing plotly
    const TESTER = document.getElementById('tester');
    Plotly.newPlot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], {
    margin: { t: 0 } } );
  } catch (error) {
    console.log('Error', error)
  }
}

function plotlyResponsive() {
  var trace1 = {
    type: 'bar',
    x: [1, 2, 3, 4],
    y: [5, 10, 2, 8],
    marker: {
        color: '#C8A2C8',
        line: {
            width: 2.5
        }
    }
  };
  
  var data = [ trace1 ];
  
  var layout = { 
    title: 'Responsive to window\'s size!',
    font: {size: 18}
  };
  
  var config = {responsive: true}
  
  Plotly.newPlot('tester', data, layout, config );
}
