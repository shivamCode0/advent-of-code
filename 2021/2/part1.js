const fs = require("fs");
const path = require("path");

let input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"), "utf8")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map((v, i) => (i === 1 ? Number(v) : v)));

// Horizontal Position
let h = 0;

// Depth
let d = 0;

input.forEach(([cmd, amt]) => {
  switch (cmd) {
    case "forward":
      h += amt;
      break;
    case "up":
      d -= amt;
      break;
    case "down":
      d += amt;
      break;
  }
});

console.log(h * d);
