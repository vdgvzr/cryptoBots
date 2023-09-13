import { Button } from "react-bootstrap";
import NftContract from "../../build/contracts/NftContract.json";
import {
  useContractWrite,
  usePrepareContractWrite,
  useContractRead,
} from "wagmi";
import Web3 from "web3";

// Load web3
window.web3 = new Web3(window.ethereum);
const networkId = await window.web3.eth.net.getId();
const networkData = NftContract.networks[networkId];

// Initialise contract vars
let contractAddress;
let contract;
let owner;

// If network data is detected from the contract, set the contract vars
if (networkData) {
  contractAddress = networkData.address;
  contract = new window.web3.eth.Contract(NftContract.abi, contractAddress);
  owner = await contract.methods.owner().call();
}

/**
 * Contract functions
 */

// Get the name of the contract
function GetName() {
  const name = useContractRead({
    address: contractAddress,
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

  return name.data ? name.data : import.meta.env.VITE_SITE_NAME;
}

// Create gen 0 bot
function CreateBotGen0({ parts }) {
  const { config } = usePrepareContractWrite({
    address: contractAddress,
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

  return <Button onClick={() => write?.()}>createBotGen0</Button>;
}

export { GetName, CreateBotGen0, contract, owner };
