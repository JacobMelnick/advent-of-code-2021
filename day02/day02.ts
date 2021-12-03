import fs from "fs";

const fileString = fs.readFileSync(__dirname + "/day02.data.txt").toString();

const data = fileString.split("\r\n");

let forward = 0;
let depth = 0;
let aim = 0;

for (let i = 0; i < data.length; i++) {
  const curr = data[i];

  if (curr.includes("forward")) {
    depth += aim * Number(curr.replace(/^\D+/g, ""));
    forward += Number(curr.replace(/^\D+/g, ""));
  } else if (curr.includes("up")) {
    aim -= Number(curr.replace(/^\D+/g, ""));
  } else {
    aim += Number(curr.replace(/^\D+/g, ""));
  }
}

console.log(forward * depth);
