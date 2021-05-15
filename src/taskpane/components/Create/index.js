import React from "react";
import CreateChartButton from "./CreateChart";

export default function CreateChart() {
  return (
    <>
      <hr className="rounded"></hr>
      <CreateChartButton />
      <hr className="rounded"></hr>
      <div id="tester" style={{width: 300, height: 200}}></div>
    </>
  );
}
