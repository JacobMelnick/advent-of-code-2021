import fs from "fs";

const fileString = fs.readFileSync(__dirname + "/day03.data.txt").toString();

const data = fileString.split("\r\n").map((row: string) => {
  return row.split("").map((bit: string) => parseInt(bit));
});

const oxygenArr = data;
const scrubber = data;

const calculateGamma = (inputData: any) => {

  let gamma = [];
  let epsilon = [];

  const findOxygen = (oxygenArr: any, scrubber: any) => {
    if (oxygenArr.length === 1) {
      return oxygenArr;
    }

    for (let i = 0; i < inputData[0].length; i++) {
      let totalBits = {
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
    }

    let newArr = oxygenArr.filter((num: any, i: any) => num[i] === gamma[i])
    let otherArr = oxygenArr.filter((num: any, i: any) => num[i] === scrubber[i])

  };

  findOxygen(oxygenArr, scrubber);
  return { gamma, epsilon };
};

const { gamma, epsilon } = calculateGamma(data);

const gammaV = parseInt(gamma.join(""), 2);
const eValue = parseInt(epsilon.join(""), 2);
