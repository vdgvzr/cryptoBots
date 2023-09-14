import { Button } from "react-bootstrap";
import NftContract from "../../build/contracts/NftContract.json";
import {
  useContractWrite,
  usePrepareContractWrite,
  useContractRead,
} from "wagmi";
import Web3 from "web3";
import Btn from "../components/Button/Button";

// Load web3
window.web3 = new Web3(window.ethereum);
const networkId = await window.web3.eth.net.getId();
const networkData = NftContract.networks[networkId];

// Initialise contract address
let contractAddress;

// If network data is detected from the contract, set the contract address
if (networkData) {
  contractAddress = networkData.address;
}

/**
 * Contract read functions
 */

// Get the name of the contract
function useGetName() {
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

// Get the contract owner address
function useGetOwner() {
  const owner = useContractRead({
    address: contractAddress,
    abi: [
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
    ],
    functionName: "owner",
  });

  return owner.data;
}

// Get the total supply of bots
function useGetTotalSupply() {
  const totalSupply = useContractRead({
    address: contractAddress,
    abi: [
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
    ],
    functionName: "totalSupply",
  });

  return totalSupply.data ? parseInt(totalSupply.data) : 0;
}

/**
 * Contract write functions
 */

// Create gen 0 bot
function CreateBotGen0({ parts }) {
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: [
      {
        name: "CreateBotGen0",
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
    functionName: "CreateBotGen0",
    args: [parseInt(parts)],
  });

  const { write } = useContractWrite(config);

  return () => write?.();
}

export { useGetName, useGetOwner, useGetTotalSupply, CreateBotGen0 };
