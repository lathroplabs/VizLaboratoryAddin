import { horizontalBoxPlot } from "../chartConfigs/box";

export function arrayToJSONObject(arr) {
  // assume header
  let keys = arr[0];

  // remove header
  let newArr = arr.slice(1, arr.length);

  let formatted = [],
    data = newArr,
    cols = keys,
    l = cols.length;
  for (var i = 0; i < data.length; i++) {
    let d = data[i];
    let o = {};
    for (var j = 0; j < l; j++) o[cols[j]] = d[j];
    formatted.push(o);
  }
  return formatted;
}

export async function selectionToDF() {
  try {
    let df;
    await Excel.run(async (context) => {
      var range = context.workbook.getSelectedRange();
      range.load("values");
      await context.sync();
      const chartData = range.values;
      const jsonData = arrayToJSONObject(chartData);
      df = new dfd.DataFrame(jsonData);
    });

    return df;
  } catch (error) {
    console.log("Error", error);
  }
}

export function getTraces(df, traceTemplate) {
  // check to see if this is a horizontal chart
  let horizontalChart
  if (traceTemplate.orientation) {
    traceTemplate.orientation === 'h' ? horizontalChart = true : horizontalChart = false
  }
  // check to see if this is a pie chart
  let pieChart = false
  if (traceTemplate.type === 'pie') {
    pieChart = true
  }
  let boxChart = false
  if (traceTemplate.type === 'box') {
    boxChart = true
  }
  
  const x = df.iloc({ columns: ["0"] }).data.flat();
  const cols = df.columns.slice(1);
  let traces = [];
  if (pieChart) {
    const y = df.iloc({rows: [0]}).data.flat().slice(1);
    traces = pieTrace(traceTemplate, y, cols);
  } else {
    cols.forEach((col) => {
      const y = df.loc({ columns: [col] }).data.flat();
      let trace
      if (horizontalChart) {
        trace = horizontalTrace(traceTemplate, x, y, col);
      } else if (boxChart) {
        trace = yTrace(traceTemplate, y, col);
      } else {
        trace = standardTrace(traceTemplate, x, y, col);
      }
      traces.push(trace);
    });
  }
  return traces;
}

function standardTrace(template, x, y, name) {
  return {
    ...template,
    y: y,
    x: x,
    name: name,
  }
}

function horizontalTrace(template, x, y, name) {
  return {
    ...template,
    y: x,
    x: y,
    name: name,
  }
}

function yTrace(template, y, name) {
  return {
    ...template,
    y: y,
    name: name,
  }
}

function xTrace(template, x, name) {
  return {
    ...template,
    x: x,
    name: name,
  }
}

function pieTrace(template, y, labels) {
  return [{
    ...template,
    labels: labels,
    values: y
  }]

}
