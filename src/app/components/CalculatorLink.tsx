import { Container, Col, Row } from "react-bootstrap";

import CButton from "@/components/CButton";

const CalculatorLink = () => {
  return (
    <CButton href="/calculator">
      <Container className="p-2 pt-3">
        <Row>
          <Col as="h2" className="text-start">
            Calculator
          </Col>
        </Row>
        <Row>
          <Col as="p" className="text-start">
            This tool calculates for the mean value of a check following the
            rules of Fateful Architecture
          </Col>
        </Row>
      </Container>
    </CButton>
  );
};

export default CalculatorLink;
