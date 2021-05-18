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
    let df
    await Excel.run(async context => {
      var range = context.workbook.getSelectedRange();
      range.load("values");
      await context.sync();
      const chartData = range.values
      const jsonData = arrayToJSONObject(chartData);
      df = new dfd.DataFrame(jsonData);
    });
    
    return df
  } catch (error) {
    console.log('Error', error)
  }
}

export function getTraces(df, type, mode) {
  const x = df.iloc({columns: ["0"]}).data.flat()
  const cols = df.columns.slice(1)
  let traces = []
  cols.forEach(col => {
  const y = df.loc({columns: [col]}).data.flat()
  const trace = {
    y: y,
    x: x,
    type: type,
    mode: mode,
    name: col
  }
  traces.push(trace)
})

return traces
}
