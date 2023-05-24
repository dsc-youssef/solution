// Dependencies
import { FC } from "react";

// React Components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const MainNavbar: FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <i className="fal fa-bars d-none d-lg-inline-block " />

      </Container>
    </Navbar>
  )
}

export default MainNavbar;
