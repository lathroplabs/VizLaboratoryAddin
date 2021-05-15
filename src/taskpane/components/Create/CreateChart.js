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
  console.log('Select Chart')
}
