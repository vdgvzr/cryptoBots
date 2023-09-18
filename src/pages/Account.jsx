import { Col, Row } from "react-bootstrap";
import BotCatalogue from "../components/BotCatalogue/BotCatalogue";
import { Synthesize } from "../wagmi/wagmiHooks";
import { useState } from "react";

export default function Account() {
  const [prevGeneration, setPrevGeneration] = useState({
    materId: null,
    paterId: null,
  });

  return (
    <>
      <Row className="my-5">
        <Col lg={2}>
          <Synthesize
            materId={prevGeneration.materId}
            paterId={prevGeneration.paterId}
          />
        </Col>
      </Row>
      <h5>Select bots to synthesize</h5>
      <BotCatalogue type="account" />
    </>
  );
}
