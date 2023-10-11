import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import CalculatorLink from "./components/CalculatorLink";

import styles from "./page.module.scss";

export default function Home() {
  const renderDescription = () => {
    return (
      <Col sm={4} as="p">
        This app is a repository of tools used to add insight on the mechanics
        of the game. These tools are not required to run a session of Fateful
        Architecture and only caters to those that wishes to explore more about
        the system.
      </Col>
    );
  };

  return (
    <main className={styles.main}>
      <Container>
        <Row className="mb-3">
          <Col as="h1" className="text-center">
            Fateful Utility Belt
          </Col>
        </Row>
        <Row className={styles.description}>{renderDescription()}</Row>
        <Row>
          <Col sm={4}>
            <CalculatorLink />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
