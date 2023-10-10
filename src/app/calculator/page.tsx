"use client";

import _ from "lodash";
import classNames from "classnames";
import { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import calculateMeanCheck from "@/lib/calculateMeanCheck";
import DieDropdown from "./components/DieDropdown";

const DIE_SIZES: string[] = ["d4", "d6", "d8", "d10", "d12"];

const CalculatorPage = () => {
  const [dies, setDies] = useState<string[]>([DIE_SIZES[0], DIE_SIZES[0]]);
  const [result, setResult] = useState<string>(
    calculateMeanCheck(dies[0], dies[1])
  );

  const handleChange = (index: number, value: string): void => {
    const dieClone = _.cloneDeep(dies);
    dieClone[index] = value;
    setDies(dieClone);
    setResult(calculateMeanCheck(dieClone[0], dieClone[1]));
  };

  return (
    <div>
      <h1 className="mb-3">Check Calculator</h1>
      <div className={classNames(styles.dropdowns, "mb-3")}>
        {_.map(dies, (die, key) => {
          return (
            <DieDropdown
              key={key}
              options={DIE_SIZES}
              onChange={(value) => handleChange(key, value)}
              value={die}
            ></DieDropdown>
          );
        })}
      </div>
      <div>
        <span>
          Mean result: <b>{result}</b>
        </span>
      </div>
    </div>
  );
};

export default CalculatorPage;
