import { CreateBotGen0, GetName } from "../wagmi/wagmiFunctions";

export default function Home() {
  return (
    <>
      <GetName />
      <CreateBotGen0 parts="123" />
    </>
  );
}
