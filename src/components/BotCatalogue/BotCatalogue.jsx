import { Col, Row } from "react-bootstrap";
import NFT from "../NftComponent/NFT";
import { useAccount } from "wagmi";
import { useGetBotCatalogue } from "../../wagmi/wagmiHooks";

export default function BotCatalogue({
  type,
  prevGeneration,
  setPrevGeneration,
}) {
  const bots = useGetBotCatalogue();
  const { address } = useAccount();

  function handleSelectBot(id) {
    if (prevGeneration.materId === id || prevGeneration.paterId === id) {
      if (prevGeneration.materId === id) {
        setPrevGeneration((prev) => ({
          ...prev,
          materId: 0,
        }));
      } else if (prevGeneration.paterId === id) {
        setPrevGeneration((prev) => ({
          ...prev,
          paterId: 0,
        }));
      }
    } else {
      if (prevGeneration.materId === 0) {
        setPrevGeneration((prev) => ({
          ...prev,
          materId: id,
        }));
      } else if (prevGeneration.paterId === 0) {
        setPrevGeneration((prev) => ({
          ...prev,
          paterId: id,
        }));
      }
    }
  }

  return (
    <>
      <Row>
        {bots &&
          bots.map((bot, index) => {
            const id = bot && parseInt(bot.id.toString());
            const gen = bot && bot.generation.toString();
            const owner = bot && bot.owner;
            const parts = bot && bot.parts.toString();
            const selected =
              prevGeneration?.materId === id || prevGeneration?.paterId === id;

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
                  <NFT
                    selectBot={handleSelectBot}
                    type="card"
                    id={id}
                    gen={gen}
                    parts={parts}
                    selected={selected}
                  />
                </Col>
              );
            }
          })}
      </Row>
    </>
  );
}
