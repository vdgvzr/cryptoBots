import { Col, Row } from "react-bootstrap";
import BotCatalogue from "../components/BotCatalogue/BotCatalogue";
import Btn from "../components/Button/Button";

export default function Account() {

  return (
    <>
      <Row>
        {/* <Col xs={2}>
          <Btn buttonText="Synthesize bots" onClick={() => synthesizeBots()} />
        </Col> */}
      </Row>
      <BotCatalogue type="account" />
    </>
  );
}
