const fs = require("fs");
const path = require("path");

let input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8").toString().split("\n\n");
let [pointsRaw, foldsRaw] = input;
let points = pointsRaw.split("\n").map((v) => v.split(",").map(Number));

const uniqueArray = (arr) => arr.filter((v, i, a) => a.findIndex((t) => t[0] === v[0] && t[1] === v[1]) === i);

points = uniqueArray(points.map((v) => (v.x > 655 ? [655 * 2 - x, v.y] : v)));

console.log(points.length);

console.log([...new Set(points.map((v) => v.join(",")))].map((v) => v.split(",")).length);
