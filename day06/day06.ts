import fs from "fs";

const fileString = fs.readFileSync(__dirname + "/day06.data.txt").toString().split(',').map((string: any) => parseInt(string));


// const countFish = (dataArray : number[]) => {
//  const queue = Array(9).fill(0);
//  for (const fish of fileString ) {
//      queue[fish]++
//  }
//  for (let i = 0; i < 80 ; i++) {
//      const current = queue.shift();
//      queue.push(current);
//      queue[6] += current;
//  }
//  console.log(queue.reduce((a, b) => a + b, 0));
 
// }
// console.log(countFish(fileString));


let countFishBirths = 0;
let days = 80;
const countFish = (data: number[]) => {
    while (days !== 0) {
    for (let i = 0; i < data.length; i++) {
            let currFish = data[i];
            
            currFish--        
            if (currFish === 0) {
                currFish = 6;
                data.push(8)
                countFishBirths++
            }
            console.log(currFish, days);
        }
        days--
    }
    return countFishBirths
}
console.log(countFish(fileString));
