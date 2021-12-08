import fs from "fs";

const fileString = fs.readFileSync(__dirname + "/day06.data.txt").toString().split(',').map((string: any) => parseInt(string));


const countFish = (dataArray : number[]) => {
 const queue = Array(9).fill(0);
 for (const fish of fileString ) {
     queue[fish]++
 }
 for (let i = 0; i < 256 ; i++) {
     const current = queue.shift();
     queue.push(current);
     queue[6] += current;
 }
 console.log(queue.reduce((a, b) => a + b, 0));
 
}

console.log(countFish(fileString));

// let countFishBirths = 0;
// let days = 80;
// for (let i = 0; i < dataArray.length; i++) {
//     while (days !== 0) {
//     let currFish = dataArray[i];
    
//     currFish--        
//     if (currFish === 0) {
//         currFish = 6;
//         dataArray.push(8)
//         countFishBirths++
//     }
//     console.log(currFish, days);
//     days--
// }
// }
// return countFishBirths