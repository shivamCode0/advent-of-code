const fs = require("fs");
const path = require("path");

let input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .toString()
  .split("\n")
  .map((v) => Number(v));

let result = input
  .map((v, i, a) => i < a.length - 2 && v + a[i + 1] + a[i + 2])
  .map((v, i, a) => i !== 0 && v > a[i - 1])
  .reduce((a, c) => a + c, 0);

console.log(result);
