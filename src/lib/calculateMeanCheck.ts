import _ from "lodash";

type calculateProp = (firstDie: string, secondDie: string) => string;

const calculateMeanCheck: calculateProp = (dieOne, dieTwo) => {
  const parsedDieOne: number = _.parseInt(_.trim(dieOne, "d"));
  const parsedDieTwo: number = _.parseInt(_.trim(dieTwo, "d"));
  const minSize: number = Math.min(parsedDieOne, parsedDieTwo);
  const maxSize: number = Math.max(parsedDieOne, parsedDieTwo);

  let result: number = 0;

  for (let i = 1; i <= minSize; i++) {
    result += i * (2 * i - 1);
  }

  for (let i = minSize + 1; i <= maxSize; i++) {
    result += minSize * i;
  }

  result /= minSize * maxSize;

  return result.toFixed(3);
};

export default calculateMeanCheck;
