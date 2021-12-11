const fs = require("fs");
const path = require("path");

const zip = (arr, ...arrs) => arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));

let input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map((v, i) => (i === 1 ? Number(v) : v)));

// Horizontal Position
let h = 0;

// Depth
let d = 0;

// Aim
let a = 0;

input.forEach(([cmd, amt]) => {
  switch (cmd) {
    case "forward":
      h += amt;
      d += a * amt;
      break;
    case "up":
      a -= amt;
      break;
    case "down":
      a += amt;
      break;
  }
});

console.log(h * d);
