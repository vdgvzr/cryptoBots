import { createConfig, configureChains } from "wagmi";
import { localhost } from "wagmi/chains";

// import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

// import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
//mimport { InjectedConnector } from "wagmi/connectors/injected";
// import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [localhost],
  [
    // alchemyProvider({ apiKey: "yourAlchemyApiKey" }),
    publicProvider(),
  ]
);

// Set up wagmi config
export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    /* new CoinbaseWalletConnector({
        chains,
        options: {
          appName: "wagmi",
        },
      }), */
    /* new WalletConnectConnector({
        chains,
        options: {
          projectId: "...",
        },
      }), */
    /* new InjectedConnector({
        chains,
        options: {
          name: "Injected",
          shimDisconnect: true,
        },
      }), */
  ],
  publicClient,
  webSocketPublicClient,
});
