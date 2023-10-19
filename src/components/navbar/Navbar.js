import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Model from "./Model";
function navbargway() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="positi">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="https://gwayerp.com/assets/svg/logo.svg"
              alt="comp logo"
              height="40px"
              width={"200px"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <Model />{" "}
              </Nav.Link>
              <Nav.Link href="#pricing">Company </Nav.Link>
              <Nav.Link href="#features">Services</Nav.Link>
              <Nav.Link href="#form">Contact Us </Nav.Link>
            </Nav>
            <Nav>
              <button
                className="btn btn-secondary text-white p-3"
                style={{ color: "#fff" }}>
                Free Consultation
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default navbargway;
