"use client";

import _ from "lodash";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./styles.module.scss";
import {
  addMeans,
  calculateMeanCheck,
  calculateDieMean,
} from "@/lib/checkCalculator";
import DieDropdown from "./components/DieDropdown";

const DIE_SIZES: string[] = ["d4", "d6", "d8", "d10", "d12"];

interface Inputs {
  baseStat: string;
  complementaryStat: string;
  power: string;
}

interface Result {
  check: string;
  power: string;
}

const CalculatorPage = () => {
  const [inputs, setInputs] = useState<Inputs>({
    baseStat: DIE_SIZES[0],
    complementaryStat: DIE_SIZES[0],
    power: DIE_SIZES[0],
  });
  const [results, setResults] = useState<Result>({
    check: calculateMeanCheck(inputs.baseStat, inputs.complementaryStat),
    power: calculateDieMean(inputs.power),
  });

  const handleChangeInput = (key: string, value: string): void => {
    const newInputs = {
      ...inputs,
      [key]: value,
    };
    const newCheckResult = calculateMeanCheck(
      newInputs.baseStat,
      newInputs.complementaryStat
    );

    setInputs(newInputs);
    setResults({
      check: newCheckResult,
      power: calculateDieMean(newInputs.power),
    });
  };

  return (
    <Container className={styles.dropdowns}>
      <Row>
        <Col as="h1">Check Calculator</Col>
      </Row>
      <Row>
        <Col as="span">
          Mean result: <b>{results.check}</b>
        </Col>
      </Row>
      <Row className="border-bottom">
        <Col className={styles["character-stats"]}>
          <DieDropdown
            label="Base Stat"
            options={DIE_SIZES}
            onChange={(value) => handleChangeInput("baseStat", value)}
            value={inputs.baseStat}
          />
          <DieDropdown
            label="Complementary Stat"
            options={DIE_SIZES}
            onChange={(value) => handleChangeInput("complementaryStat", value)}
            value={inputs.complementaryStat}
          />
        </Col>
      </Row>
      <Row>
        <Col as="h1">Power Calculator</Col>
      </Row>
      <Row>
        <Col as="span">
          Power from Die: <b>{results.power}</b>
        </Col>
      </Row>
      <Row>
        <Col as="span">
          Total Power: <b>{addMeans(results.check, results.power)}</b>
        </Col>
      </Row>
      <Row className="border-bottom">
        <Col>
          <DieDropdown
            label="Weapon/Aether Power"
            options={DIE_SIZES}
            onChange={(value) => handleChangeInput("power", value)}
            value={inputs.power}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CalculatorPage;
