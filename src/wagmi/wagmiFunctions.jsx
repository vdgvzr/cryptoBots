import { getEnsName } from "viem/ens";
import NftContract from "../../build/contracts/NftContract.json";
import {
  useContractWrite,
  usePrepareContractWrite,
  useContractRead,
} from "wagmi";
import Web3 from "web3";
import { NamedFragment } from "ethers";

window.web3 = new Web3(window.ethereum);
const networkId = await window.web3.eth.net.getId();
const networkData = NftContract.networks[networkId];

let CONTRACT_ADDRESS;

if (networkData) {
  CONTRACT_ADDRESS = networkData.address;
}

export function GetName() {
  const name = useContractRead({
    address: CONTRACT_ADDRESS,
    abi: [
      {
        name: "name",
        type: "function",
        stateMutability: "view",
        inputs: [],
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        constant: true,
      },
    ],
    functionName: "name",
  });

  return <>{name.data ? name.data : import.meta.env.VITE_SITE_NAME}</>;
}

export function CreateBotGen0({ parts }) {
  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: [
      {
        name: "createBotGen0",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          {
            internalType: "uint256",
            name: "_parts",
            type: "uint256",
          },
        ],
        outputs: [],
      },
    ],
    functionName: "createBotGen0",
    args: [parseInt(parts)],
  });

  const { write } = useContractWrite(config);

  return (
    <div>
      <button onClick={() => write?.()}>createBotGen0</button>
    </div>
  );
}
