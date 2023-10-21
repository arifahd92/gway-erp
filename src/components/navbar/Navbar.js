import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import MyModal from "./Mymodal";
function navbargway() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="">
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
                <MyModal navItem="Product" />{" "}
              </Nav.Link>
              <Nav.Link href="#pricing text-center">
                {" "}
                <MyModal navItem="Company" />{" "}
              </Nav.Link>
              <Nav.Link href="#features">
                {" "}
                <MyModal navItem="Services" />{" "}
              </Nav.Link>
              <Nav.Link href="#form">Contact Us </Nav.Link>
            </Nav>
            <Nav>
              <button
                className="btn  text-white "
                style={{
                  color: "#fff",
                  background:
                    "linear-gradient(90deg, rgb(39, 227, 208), rgb(136, 216, 112))",
                  fontSize: "25px",
                  padding: "10px",
                }}
              >
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
