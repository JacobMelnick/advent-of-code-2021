import fs from "fs";

const fileString = fs.readFileSync(__dirname + "/day03.data.txt").toString();

const data = fileString.split("\r\n");

let gammaNumber = "";
let epsilonNum = "";
let iterator = 0;

if (gammaNumber.length < 13) {
  let gamma = [];
  let epsilon = [];
  for (let i = 0; i < data.length; i++) {
    const curr = data[i];
    if (curr[iterator] === "1") {
      gamma.push(curr[iterator]);
    } else {
      epsilon.push(curr[iterator]);
    }
  }
  console.log(gamma, 'test');
  
  if (gamma.length > epsilon.length) {
    gammaNumber += gamma[0];
    epsilonNum += epsilon[0];
    iterator++
  } else if (gamma.length < epsilon.length) {
    epsilonNum += epsilon[0];
    gammaNumber += gamma[0];
    iterator++
  }
}

console.log(epsilonNum, gammaNumber, iterator);
