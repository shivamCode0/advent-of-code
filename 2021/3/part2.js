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

/** @type {number[][]} */
let input = zip(
  ...fs
    .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
    .toString()
    .split("\n")
    .map((v) => v.split("").map((v) => Number(v)))
);
/** @type {number[][]} */
let inp1 = JSON.parse(JSON.stringify(input));
/** @type {number[][]} */
let inp2 = JSON.parse(JSON.stringify(input));

// console.log(inp1);

for (let i = 0; inp1[0].length > 1; i++) {
  let modeArr = modeArray(inp1[i]);
  // console.log({ modeArr,  });
  if (modeArr == null) {
    console.log("null");
    console.log(inp1);
  }
  if (modeArr.length === 2) modeArr = [1];
  if (modeArr.indexOf(null) !== -1) console.log({ inp1, i });
  let mode = modeArr[0];
  let elemsToRemove = inp1[i]
    .map((v, i) => [v, i])
    .filter((v) => v[0] !== mode)
    .map((v) => v[1]);
  inp1 = inp1.map((v, j) => v.filter((v2, k) => elemsToRemove.indexOf(k) === -1));
}

for (let i = 0; inp2[0].length > 1; i++) {
  let modeArr = modeArray(inp2[i]);
  // console.log({ modeArr,  });
  if (modeArr == null) {
    console.log("null");
    console.log(inp2);
  }
  if (modeArr.length === 2) modeArr = [0];
  if (modeArr.indexOf(null) !== -1) console.log({ inp2, i });
  let mode = modeArr[0];

  let elemsToRemove = inp2[i]
    .map((v, i) => [v, i])
    .filter((v) => v[0] === mode)
    .map((v) => v[1]);
  console.log(elemsToRemove.length, inp2[i].length);
  inp2 = inp2.map((v, j) => v.filter((v2, k) => elemsToRemove.indexOf(k) === -1));
}
console.log(inp2);

console.log("------");
let p = inp1.map((v) => v[0]).reduce((a, c) => (a << 1) + c, 0);
let q = inp2.map((v) => v[0]).reduce((a, c) => (a << 1) + c, 0);
console.log(p);
console.log(q);
console.log(p * q);
// console.log(inp1.reduce((a, c) => (a << 1) + c, 0));
