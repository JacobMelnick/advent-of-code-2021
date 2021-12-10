import fs from "fs";

const fileString = fs
  .readFileSync(__dirname + "/day10.data.txt")
  .toString()
  .split("\n")
  .filter((line: any) => line !== "");

const map = {
  "<": ">",
  "{": "}",
  "[": "]",
  "(": ")",
};

const pair = "([{<";
type ScoreChar = ')' | ']' | '}' | '>'
type Scores = Record<ScoreChar, number>

const filterData = (chunks: Array<Array<ScoreChar>>) => {
  let finalScore = 0;
  const scores: Scores = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137,
  };

  for (const currentLine of chunks) {
    let stack = [];
    for (const char of currentLine) {
      if (pair.includes(char)) {
        stack.push(char);
        } else if (map[stack.pop() as keyof typeof map] !== char) {
            finalScore += scores[char];
            break
      }
    }
  }
  return finalScore;
};

console.log(filterData(fileString as unknown as Array<Array<ScoreChar>>));
