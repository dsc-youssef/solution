// Dependencies
import { FC } from "react";

// Bootstrap Components
import { Container } from "react-bootstrap";

// Navbar Components
import UserButtons from "./components/UserButtons";


const MainNavbar: FC = () => {
  return (
    <nav className="main-navbar">
      <Container fluid>
        <div>
          <i className="fal fa-bars-staggered cursor-pointer" />
        </div>
        <UserButtons />
      </Container>
    </nav>
  )
}

export default MainNavbar;
