import { Button } from "react-bootstrap";
import { formatAddress } from "../../utils/index";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import Btn from "../Button/Button";

export default function Profile() {
  const { address, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div>
        {ensAvatar && <img src={ensAvatar} alt="ENS Avatar" />}
        <Btn
          onClick={disconnect}
          buttonText={ensName ? ensName : formatAddress(address)}
        />
      </div>
    );
  }

  return (
    <div>
      {connectors.map((connector) => (
        <Btn
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
          buttonText={`${connector.name}
          ${!connector.ready ? " (unsupported)" : ""} 
          ${
            isLoading && connector.id === pendingConnector?.id
              ? " (connecting)"
              : ""
          }`}
        />
      ))}

      {error && <div>{error.message}</div>}
    </div>
  );
}
