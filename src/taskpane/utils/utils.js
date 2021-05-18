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

