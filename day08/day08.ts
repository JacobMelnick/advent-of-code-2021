import fs from "fs";

const segments = fs
  .readFileSync(__dirname + "/day08.data.txt")
  .toString()
  .split("\n")
  .map(seg => seg.split(" | ")
  .map(code => code.split(' ')))


  
let countOfDigits = 0;

for (let i = 0; i < segments.length; i++) {
    const curr = segments[i];
    for (let j = 0; j < curr[1].length; j++) {
        console.log(segments[i][1][j].length == 2);
        
        if (segments[i][1][j].length == 2 || segments[i][1][j].length == 3 || segments[i][1][j].length == 4 ||segments[i][1][j].length == 7) {
            countOfDigits++
        }
    }
}
console.log(countOfDigits);
