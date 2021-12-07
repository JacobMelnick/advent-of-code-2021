import fs from "fs";

const graphData = fs
  .readFileSync(__dirname + "/day05.data.txt")
  .toString()
  .split("\n")
  .map((row) => {
    return row.split(" -> ").map((position) => position.split(",").map(Number));
  });

// console.log(fileString);

const twoLinesIntersect = (part1: any) => {
  let count = 0;
  // making the graph
  let graph = new Array(1000);
  graph.fill(0);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = new Array(1000);
    graph[i].fill(0);
  }

  // adding lines
  for (let i = 0; i < graphData.length; i++) {
    const curr = graphData[i];

    let x1 = curr[0][0];
    let y1 = curr[0][1];
    let x2 = curr[1][0];
    let y2 = curr[1][1];

    let xSteps: number[] = [];
    let ySteps: number[] = [];

    if (x1 === x2) {
      if (y2 > y1) {
        for (let step = y1; step <= y2; step++) {
          graph[step][x1]++;
        }
      } else {
        for (let step = y1; step >= y2; step--) {
          graph[step][x1]++;
        }
      }
    } else if (y1 === y2) {
      if (x2 > x1) {
        for (let step = x1; step <= x2; step++) {
          graph[y1][step]++;
        }
      } else {
        for (let step = x1; step >= x2; step--) {
          graph[y1][step]++;
        }
      }
    
      if (x2 > x1 && y2 > y1) {
        for (let step = x1; step <= x2; step++) {
          xSteps.push(step);
        }
        for (let step = y1; step <= y2; step++) {
          ySteps.push(step);
        }
        xSteps.forEach((x, i) => graph[ySteps[i]][x]++);
      } else if (x2 < x1 && y2 < y1) {
        for (let step = x1; step >= x2; step--) {
          xSteps.push(step);
        }
        for (let step = y1; step >= y2; step--) {
          ySteps.push(step);
        }
        xSteps.forEach((x, i) => graph[ySteps[i]][x]++);
      } else if (x2 > x1 && y2 < y1) {
        for (let step = x1; step <= x2; step++) {
          xSteps.push(step);
        }
        for (let step = y1; step >= y2; step--) {
          ySteps.push(step);
        }
        xSteps.forEach((x, i) => graph[ySteps[i]][x]++);
      } else if (x2 < x1 && y2 > y1) {
        for (let step = x1; step >= x2; step--) {
          xSteps.push(step);
        }
        for (let step = y1; step <= y2; step++) {
          ySteps.push(step);
        }
        xSteps.forEach((x, i) => graph[ySteps[i]][x]++);
      }
    }
  }

  graph.forEach((row) => row.forEach((num: any) => (num >= 2 ? count++ : num)));
  return count;
};
console.log(twoLinesIntersect(graphData));

// function solvePuzzle(part = 1) {

//   // "Drawing" the lines
//   data.forEach(line => {

//     if (x1 === x2) {
//     // For part 2, also consider diagonal lines
//     } else {
//       if (part !== 2) return

//   // Count overlapping lines
//   let count = 0
//   diagram.forEach(row => row.forEach(num => num >= 2 ? count++ : num))
