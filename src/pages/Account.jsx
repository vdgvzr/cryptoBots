import { Col, Row } from "react-bootstrap";
import BotCatalogue from "../components/BotCatalogue/BotCatalogue";
import { Synthesize } from "../wagmi/wagmiHooks";
import { useState } from "react";

export default function Account() {
  const [prevGeneration, setPrevGeneration] = useState({
    materId: 0,
    paterId: 0,
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
      <BotCatalogue
        prevGeneration={prevGeneration}
        setPrevGeneration={setPrevGeneration}
        type="account"
      />
    </>
  );
}
