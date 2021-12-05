import fs from "fs";

const fileString = fs.readFileSync(__dirname + "/day03.data.txt").toString();

const data = fileString.split("\r\n").map((row: string) => {
  return row.split("").map((bit: string) => parseInt(bit));
});

let oxygenArr = data;
let scrubber = data;

const O2RateComparator = ({
  zeroTotal,
  oneTotal,
}: {
  zeroTotal: number;
  oneTotal: number;
}): number => {
  if (zeroTotal > oneTotal) {
    return 0;
  } else if (zeroTotal < oneTotal) {
    return 1;
  } else {
    return 1;
  }
};

const C02RateComparator = ({
  zeroTotal,
  oneTotal,
}: {
  zeroTotal: number;
  oneTotal: number;
}): number => {
  if (zeroTotal > oneTotal) {
    return 1;
  } else if (zeroTotal < oneTotal) {
    return 0;
  } else {
    return 0;
  }
};

const calculateGamma = (inputData: Array<Array<number>>) => {
  let gamma = [];
  let epsilon = [];

  for (let i = 0; i < inputData[0].length; i++) {
    let totalBits = {
      ones: 0,
      zeros: 0,
    };
    let totalBitsForOxygen = {
      ones: 0,
      zeros: 0,
    };
    let totalBitsForScrubber = {
      ones: 0,
      zeros: 0,
    };
    for (let j = 0; j < inputData.length; j++) {
      const current = inputData[j][i];
      if (current === 1) {
        totalBits.ones++;
      } else {
        totalBits.zeros++;
      }
    }
    if (totalBits.ones > totalBits.zeros) {
      gamma.push(1);
      epsilon.push(0);
    } else {
      gamma.push(0);
      epsilon.push(1);
    }
    for (let k = 0; k < oxygenArr.length; k++) {
      let currOxy = oxygenArr[k][i];
      if (currOxy === 1) {
        totalBitsForOxygen.ones++;
      } else {
        totalBitsForOxygen.zeros++;
      }
    }
    for (let l = 0; l < scrubber.length; l++) {
      const currScrub = scrubber[l][i];
      if (currScrub === 1) {
        totalBitsForScrubber.ones++;
      } else {
        totalBitsForScrubber.zeros++;
      }
    }

    if (oxygenArr.length !== 1) {
      oxygenArr = oxygenArr.filter(
        (num: any) =>
          num[i] ===
          O2RateComparator({
            zeroTotal: totalBitsForOxygen.zeros,
            oneTotal: totalBitsForOxygen.ones,
          })
      );
    }
    if (scrubber.length !== 1) {
      scrubber = scrubber.filter(
        (num: any) =>
          num[i] ===
          C02RateComparator({
            zeroTotal: totalBitsForScrubber.zeros,
            oneTotal: totalBitsForScrubber.ones,
          })
      );
    }
  }

  return { gamma, epsilon };
};

const { gamma, epsilon } = calculateGamma(data);

const gammaV = parseInt(gamma.join(""), 2);
const eValue = parseInt(epsilon.join(""), 2);
const scrubberVal = parseInt(oxygenArr[0].join(""), 2);
const oxygenVal = parseInt(scrubber[0].join(""), 2);
console.log(scrubberVal * oxygenVal);
