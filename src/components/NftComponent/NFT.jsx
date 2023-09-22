import { Card } from "react-bootstrap";
import { allColors } from "../../assets/js/nftAttributes/colors";
import Base from "./Base";

export default function NFT({
  id,
  parts,
  gen,
  type,
  selectBot,
  selected,
  owner,
}) {
  const colors = Object.values(allColors());

  let generate;
  if (parts != undefined) {
    generate = {
      // Colors
      skinColor: colors[parseInt(parts.slice(0, 2))],
      batteryColor: colors[parseInt(parts.slice(2, 4))],
      highlightColor: colors[parseInt(parts.slice(4, 6))],
      backgroundColor: colors[parseInt(parts.slice(6, 8))],

      // Attributes
      expression: parseInt(parts.slice(8, 9)),
      antennae: parseInt(parts.slice(9, 10)),
      expressionColor: colors[parseInt(parts.slice(10, 11))],
      antennaColor: colors[parseInt(parts.slice(11, 13))],
      size: parseInt(parts.slice(13, 14)),
    };
  } else {
    generate = {
      // Colors
      skinColor: colors[88],
      batteryColor: colors[88],
      highlightColor: colors[33],
      backgroundColor: colors[88],

      // Attributes
      expression: 0,
      antennae: 0,
      expressionColor: colors[6],
      antennaColor: colors[88],
      size: 0,
    };
  }

  return (
    <>
      {type === "card" ? (
        <Card onClick={() => selectBot?.(id)}>
          <Base parts={generate} />
          <Card.Body>
            {<Card.Title>#{id}</Card.Title>}
            {<Card.Title>GEN: {gen}</Card.Title>}
            {selected && <Card.Title>Selected</Card.Title>}
            <Card.Text>PARTS: {parts}</Card.Text>
            <Card.Text>Owner: {owner}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Base parts={generate} />
      )}
    </>
  );
}
