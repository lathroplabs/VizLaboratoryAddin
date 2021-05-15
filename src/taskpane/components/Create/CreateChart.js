import React from "react";
import { PrimaryButton, Label } from "office-ui-fabric-react";

export default function CreateChartButton() {
  return (
    <div className="centered">
      <Label>Create Chart </Label>
      <PrimaryButton text="Create" onClick={testPlotly} allowDisabledFocus />
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
