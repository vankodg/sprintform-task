import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            height={50}
            alt="sprintform spending tracker tool logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
