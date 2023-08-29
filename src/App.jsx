import { WagmiConfig } from "wagmi";
import { config } from "./wagmi/wagmiConfig";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { Container } from "react-bootstrap";

function App() {
  return (
    <WagmiConfig config={config}>
      <ScrollRestoration />
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </WagmiConfig>
  );
}

export default App;
