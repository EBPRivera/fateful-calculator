import _ from "lodash";

const parseDie = (die: string): number => {
  return _.parseInt(_.trim(die, "d"));
};

export const calculateMeanCheck = (
  baseStat: string,
  complementaryStat: string
): string => {
  const parsedBaseStat: number = parseDie(baseStat);
  const parsedComplementaryStat: number = parseDie(complementaryStat);
  const minDie: number = Math.min(parsedBaseStat, parsedComplementaryStat);
  const maxDie: number = Math.max(parsedBaseStat, parsedComplementaryStat);

  let result: number = 0;

  for (let i = 1; i <= minDie; i++) {
    result += i * (2 * i - 1);
  }

  for (let i = minDie + 1; i <= maxDie; i++) {
    result += minDie * i;
  }

  result /= minDie * maxDie;

  return result.toFixed(3);
};

export const calculateDieMean = (die: string): string => {
  const parsedDie: number = parseDie(die);
  let result: number = 0;

  for (let i = 1; i <= parsedDie; i++) {
    result += i;
  }

  result /= parsedDie;

  return result.toFixed(3);
};

export const addMeans = (meanOne: string, meanTwo: string): string => {
  const result: number = parseFloat(meanOne) + parseFloat(meanTwo);
  return result.toFixed(3);
};
