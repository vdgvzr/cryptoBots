import { useNetwork, useSwitchNetwork } from "wagmi";

export default function Networks() {
  const { chain } = useNetwork();
  const { chains, error, switchNetwork } = useSwitchNetwork();

  return (
    <>
      {chain && (
        <a
          className="nav-link me-3 network-switcher"
          onClick={() => switchNetwork?.(chains[0].id)}
          disabled
        >
          Connected to {chain.name}
        </a>
      )}

      <div>{error && error.message}</div>
    </>
  );
}
