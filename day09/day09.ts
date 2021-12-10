import fs from "fs";

const fileString = fs.readFileSync(__dirname + "/day09.data.txt").toString();

const smokeShows = fileString
  .split("\n")
  .map((row) => row.split("").map((curr) => Number(curr)));

const isLowest = (data: any, x: any, y: any) => {
  let adjacent = [];

  const directions = {
    up: y + 1,
    down: y - 1,
    left: x - 1,
    right: x + 1,
  };

  if (data[y][directions.left] !== undefined) {
    adjacent.push(data[y][directions.left]);
  }
  if (data[y][directions.right] !== undefined) {
    adjacent.push(data[y][directions.right]);
  }
  if (data[directions.up] !== undefined) {
    adjacent.push(data[directions.up][x]);
  }
  if (data[directions.down] !== undefined) {
    adjacent.push(data[directions.down][x]);
  }

  for (const point of adjacent) {
    if (data[y][x] >= point) {
      return false;
    }
  }
  return true;
};
const part1 = smokeShows.reduce(
  (outer: any, row, y) =>
    outer +
    row
      .filter((num, x) => isLowest(smokeShows, x, y))
      .reduce((inner, number) => inner + number + 1, 0),
  0
);

const getLows = (array: any) => {
  const lowPoints = [];
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (isLowest(array, x, y)) {
        lowPoints.push(`${x} - ${y}`);
      }
    }
  }
  return lowPoints;
};

const pointsArr = getLows(smokeShows);

const basinSize = (
  array: any,
  coordinates: any,
  basinSet = new Set([coordinates])
) => {
  const [x, y] = coordinates.split("-").map((num: string) => Number(num));
  const adjacent = [];
  console.log(x, y);

  const directions = {
    top: `${x} - ${y - 1}`,
    bottom: `${x} - ${y + 1}`,
    right: `${x + 1} - ${y}`,
    left: `${x - 1} - ${y}`,
  };
  console.log(directions);

  if (
    array[y - 1] !== undefined &&
    array[y - 1][x] !== 9 &&
    !basinSet.has(directions.top)
  ) {
    adjacent.push(directions.top);
    basinSet.add(directions.top);
  }

  if (
    array[y][x - 1] !== undefined &&
    array[y][x - 1] !== 9 &&
    !basinSet.has(directions.left)
  ) {
    adjacent.push(directions.left);
    basinSet.add(directions.left);
  }

  if (
    array[y][x + 1] !== undefined &&
    array[y][x + 1] !== 9 &&
    !basinSet.has(directions.right)
  ) {
    adjacent.push(directions.right);
    basinSet.add(directions.right);
  }

  if (
    array[y + 1] !== undefined &&
    array[y + 1][x] !== 9 &&
    !basinSet.has(directions.bottom)
  ) {
    adjacent.push(directions.bottom);
    basinSet.add(directions.bottom);
  }

  adjacent.forEach((coords: any) => {
    basinSize(array, coords, basinSet);
  });
  return basinSet.size;
};

const resultArr = pointsArr.map((coords: any) => {
  return basinSize(smokeShows, coords);
});

resultArr.sort((a, b) => b - a);

const part2 = resultArr[0] * resultArr[1] * resultArr[2];
console.log(part2);
