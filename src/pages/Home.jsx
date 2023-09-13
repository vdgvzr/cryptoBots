import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();

  return (
    <>
      <div>{address}</div>
    </>
  );
}
