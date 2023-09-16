import { Col, Row } from "react-bootstrap";
import BotCatalogue from "../components/BotCatalogue/BotCatalogue";
import {
  CreateBotGen0,
  useGetCreationCounter,
  useGetCreationLimit,
  useGetTotalSupply,
  useIsOwner,
} from "../wagmi/wagmiHooks";

export default function Admin() {
  const isOwner = useIsOwner();
  const totalSupply = useGetTotalSupply();
  const gen0Limit = useGetCreationLimit();
  const gen0Counter = useGetCreationCounter();

  const remainingGen0 = gen0Limit - gen0Counter;

  return (
    <>
      {isOwner && (
        <>
          <Row className="my-5">
            <Col xs={12}>{remainingGen0} left to mint</Col>
          </Row>
          <p>Total Supply: {totalSupply}</p>
          <p>Limit: {gen0Limit}</p>
          <p>Counter: {gen0Counter}</p>
          <Row className="my-5">
            <Col lg={2}>
              <CreateBotGen0 />
            </Col>
          </Row>
          <BotCatalogue type="admin" />
        </>
      )}
    </>
  );
}
