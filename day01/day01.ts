import fs from "fs";

const fileString = fs.readFileSync(__dirname + "/day01.data.txt").toString();

const data = fileString.split("\r\n").map((string) => Number(string));

const countDecreases = (array: number[]) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    const next = array[i - 1];
    if (curr > next) {
      count++;
    }
  }
  return count;
};

const groupByThrees = (array: number[]): number[] => {
  const threeArray = [];
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    const next = array[i + 1];
    const second = array[i + 2];
    threeArray.push(curr + next + second);
  }
  return threeArray;
};

console.log(countDecreases(groupByThrees(data)));
``