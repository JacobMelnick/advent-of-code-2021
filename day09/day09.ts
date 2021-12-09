import fs from "fs";

const smokeShows = fs
  .readFileSync(__dirname + "/day09.data.txt")
  .toString()
  .split("")
  .map((row: string) => {
    return row.split("").map((item: string) => parseInt(item));
  });

console.log(smokeShows);
const directions = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [0, 1],
};
let countOfHeights = [];

for (let i = 0; i < smokeShows.length; i++) {
  const height = smokeShows[i];
  if (
    height[directions.up] <= height &&
    height[directions.right] <= height &&
    height[directions.left] <= height &&
    height[directions.down] <= height
  ) {
    countOfHeights.push(height);
  }
}
const resultHeights = countOfHeights
  .map((current: any) => {
    current++;
  })
  .reduce((acc, curr: any) => acc + curr, 0);

// console.log(resultHeights);
