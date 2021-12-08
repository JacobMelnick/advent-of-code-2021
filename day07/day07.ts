import fs from "fs";

const crabs = fs
  .readFileSync(__dirname + "/day07.data.txt")
  .toString()
  .split(",")
  .map((string: any) => parseInt(string))
  .sort((a, b) => a - b);

// const fuel = (pos: any, steps: any) => {
//     crabs.reduce((acc: any, curr: any) => acc + steps(Math.abs(pos - curr)), 0)
// };
let fuel = 0;
const median = crabs[Math.floor(crabs.length / 2)];
for (let i = 0; i < crabs.length; i++) {
  fuel += Math.abs(crabs[i] - median);
}
console.log(fuel);

// console.log(fuel(median, n => n));
