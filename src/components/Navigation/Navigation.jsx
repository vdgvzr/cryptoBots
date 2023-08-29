import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import { PAGES } from "../../router";
import { GetName } from "../../wagmi/wagmiFunctions";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <GetName />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {PAGES.map((page, index) => {
              return (
                <Link key={index} className="nav-link" to={page.url}>
                  {page.name}
                </Link>
              );
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
