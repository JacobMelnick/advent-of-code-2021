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
// console.log(fuel(median, n => n)); 
let fuel = 0;
const median = crabs[Math.floor(crabs.length / 2)];
for (let i = 0; i < crabs.length; i++) {
  fuel += Math.abs(crabs[i] - median);
}
// console.log(fuel);


//part 2

let fuelExpo = [];

for (let i = Math.min(...crabs); i <= Math.max(...crabs); i++) {
  fuelExpo[i] = 0
  for (let j = 0; j < crabs.length; j++) {
    const currDif = Math.abs(crabs[j] - i);
    fuelExpo[i] += currDif *((currDif + 1) / 2) 
  }
  
}

console.log(Math.min(...fuelExpo));

