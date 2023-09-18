import { Col, Row } from "react-bootstrap";
import NFT from "../NftComponent/NFT";
import { useAccount } from "wagmi";
import { useGetBotCatalogue } from "../../wagmi/wagmiHooks";

export default function BotCatalogue({ type }) {
  const bots = useGetBotCatalogue();
  const { address } = useAccount();

  return (
    <>
      <Row>
        {bots &&
          bots.map((bot, index) => {
            const id = bot && parseInt(bot.id.toString());
            const gen = bot && bot.generation.toString();
            const owner = bot && bot.owner;
            const parts = bot && bot.parts.toString();

            if (gen === "0" && type === "admin") {
              return (
                <Col lg={2} key={index}>
                  <NFT type="card" id={id} gen={gen} parts={parts} />
                </Col>
              );
            } else if (type === "catalogue") {
              return (
                <Col lg={2} key={index}>
                  <NFT type="card" id={id} gen={gen} parts={parts} />
                </Col>
              );
            } else if (type === "account" && owner === address) {
              return (
                <Col lg={2} key={index}>
                  <NFT type="card" id={id} gen={gen} parts={parts} />
                </Col>
              );
            }
          })}
      </Row>
    </>
  );
}
