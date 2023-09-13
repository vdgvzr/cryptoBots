import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import { PAGES } from "../../router";
import { GetName, owner } from "../../wagmi/wagmiFunctions";
import { useAccount } from "wagmi";

export default function Navigation() {
  const { address, isConnected } = useAccount();
  const isOwner = owner === address;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand" href="/">
          <GetName />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {PAGES.map((page, index) => {
              const loggedIn = page.name !== "Account" || isConnected;
              const loggedInAsOwner = page.name !== "Admin" || isOwner;

              if (loggedIn) {
                if (loggedInAsOwner) {
                  return (
                    <Link key={index} className="nav-link" to={page.url}>
                      {page.name}
                    </Link>
                  );
                }
              }
            })}
          </Nav>
          <Nav>
            <Profile />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
