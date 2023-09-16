import { useState } from "react";
import NftContract from "../../build/contracts/NftContract.json";
import {
  useContractWrite,
  usePrepareContractWrite,
  useContractRead,
  useWaitForTransaction,
} from "wagmi";
import Web3 from "web3";
import Btn from "../components/Button/Button";
import { useDebounce } from "../hooks/useDebouce";

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
  const supply = useContractRead({
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

  return supply.data ? parseInt(supply.data) : 0;
}

// Get gen 0 creation limit
function useGetCreationLimit() {
  const limit = useContractRead({
    address: contractAddress,
    abi: [
      {
        inputs: [],
        name: "CREATION_LIMIT_GEN0",
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
    functionName: "CREATION_LIMIT_GEN0",
  });

  return limit.data ? parseInt(limit.data) : 0;
}

// Get gen 0 creation counter
function useGetCreationCounter() {
  const counter = useContractRead({
    address: contractAddress,
    abi: [
      {
        inputs: [],
        name: "GEN0_COUNTER",
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
    functionName: "GEN0_COUNTER",
  });

  return counter.data ? parseInt(counter.data) : 0;
}

// Get the bot catalogue
function useGetBotCatalogue() {
  const catalogue = useContractRead({
    address: contractAddress,
    abi: [
      {
        inputs: [],
        name: "getCatalogue",
        outputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "parts",
                type: "uint256",
              },
              {
                internalType: "uint64",
                name: "creationTime",
                type: "uint64",
              },
              {
                internalType: "uint32",
                name: "materId",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "paterId",
                type: "uint32",
              },
              {
                internalType: "uint16",
                name: "generation",
                type: "uint16",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            internalType: "struct NftContract.Bot[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
    ],
    functionName: "getCatalogue",
  });

  return catalogue.data;
}

/**
 * Contract write functions
 */

// Create gen 0 bot
function CreateBotGen0() {
  const [parts, setParts] = useState(0);
  const debouncedParts = useDebounce(parts, 500);

  function generateDna() {
    let dna = [];

    for (let i = 0; i < 14; i++) {
      let randomNumber = Math.random() * (9 - 0) + 0;
      dna.push(parseInt(randomNumber));
    }

    return parseInt(dna.join(""));
  }

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
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
    args: [parseInt(debouncedParts)],
    enabled: Boolean(debouncedParts !== 0),
  });

  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  if (write) {
    return (
      <>
        <Btn
          buttonText={"Generate parts"}
          onClick={() => {
            setParts(generateDna());
          }}
        />
        {parts}
        <Btn
          disabled={!write || isLoading || parts === 0}
          buttonText={isLoading ? "Creating..." : "Mint Gen 0 Bot"}
          onClick={() => {
            write?.();
          }}
        />
        {isSuccess && (
          <div>
            Successfully minted your NFT!
            <div>
              <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
            </div>
          </div>
        )}
        {(isPrepareError || isError) && (
          <div>Error: {(prepareError || error)?.message}</div>
        )}
      </>
    );
  }
}

/**
 * Contract variable functions
 */

// Set isOwner var
function useIsOwner() {
  const owner = useGetOwner();
  return owner;
}

export {
  useGetName,
  useGetOwner,
  useGetTotalSupply,
  useGetCreationLimit,
  useGetCreationCounter,
  useGetBotCatalogue,
  CreateBotGen0,
  useIsOwner,
};
