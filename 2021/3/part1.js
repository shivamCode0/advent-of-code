const fs = require("fs");
const path = require("path");

const zip = (arr, ...arrs) => arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));

function modeArray(array) {
  if (array.length == 0) return null;
  var modeMap = {},
    maxCount = 1,
    modes = [];

  for (var i = 0; i < array.length; i++) {
    var el = array[i];

    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      modes = [el];
      maxCount = modeMap[el];
    } else if (modeMap[el] == maxCount) {
      modes.push(el);
      maxCount = modeMap[el];
    }
  }
  return modes;
}

/**
 * @type {number[]}
 */
let input = zip(
  ...fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
    .toString()
    .split("\n")
    .map((v) => v.split("").map((v) => Number(v)))
);

let mostFreq = input.map((v) => modeArray(v)[0]);
console.log(mostFreq);

let γ = mostFreq.reduce((a, c) => (a << 1) + c, 0);
let ε = mostFreq.reduce((a, c) => (a << 1) + (c ^ 1), 0);

console.log(γ * ε);
