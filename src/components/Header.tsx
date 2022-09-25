import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            height={50}
            alt="sprintform spending tracker tool logo"
          />
          Hello
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
