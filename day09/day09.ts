import fs from "fs";

const fileString = fs
  .readFileSync(__dirname + "/day09.data.txt")
  .toString()

  const smokeShows = fileString.split('\n').map(row => row.split('').map(curr => Number(curr)))


const isLowest = (data: any, x: any, y: any) => {
  let adjacent = [];

  const directions = {
    up: y + 1,
    down: y - 1 ,
    left: x - 1,
    right: x + 1,
  };
  
  if (data[y][directions.left] !== undefined) {
    adjacent.push(data[y][directions.left])
  }
  if (data[y][directions.right] !== undefined) {
    adjacent.push(data[y][directions.right])
  }
  if (data[directions.up] !== undefined) {
    adjacent.push(data[directions.up][x])
  }
  if (data[directions.down] !== undefined) {
    adjacent.push(data[directions.down][x])
  }
  
  for (const point of adjacent) {
    if (data[y][x] >= point) {
      return false
    }
  }
  return true
  
}
const part1 = smokeShows.reduce((outer: any, row, y) => outer + row
.filter((num, x) => isLowest(smokeShows, x, y))
.reduce((inner, number) => inner + number + 1, 0), 0)

console.log(part1);
