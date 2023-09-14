import { Col, Row } from "react-bootstrap";
import BotCatalogue from "../components/BotCatalogue/BotCatalogue";
import Btn from "../components/Button/Button";
import { useMetaMask } from "../hooks/useMetamask";

export default function Account() {
  const { contract, wallet, loadWeb3, setToastMessages } = useMetaMask();

  function synthesizeBots() {
    contract.methods
      .synthesize(0, 1)
      .send({ from: wallet.accounts[0] })
      .once("receipt", () => {
        loadWeb3();
      })
      .catch((e) => {
        setToastMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            type: "error",
            message: e.message,
          },
        ]);
      });

    contract.events.Birth().on("data", function (e) {
      setToastMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          type: "success",
          message: `Successfully minted CryptoBot #${e.returnValues.botId}!`,
        },
      ]);
    });
  }

  return (
    <>
      <Row>
        <Col xs={2}>
          <Btn buttonText="Synthesize bots" onClick={() => synthesizeBots()} />
        </Col>
      </Row>
      <BotCatalogue type="account" />
    </>
  );
}
