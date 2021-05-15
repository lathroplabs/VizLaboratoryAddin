import React from "react";
import { PrimaryButton, Label } from "office-ui-fabric-react";

export default function CreateChartButton() {
  return (
    <div className="centered">
      <Label>Create Chart </Label>
      <PrimaryButton text="Create" onClick={getSelected} allowDisabledFocus />
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
