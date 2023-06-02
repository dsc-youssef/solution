// Dependencies
import { FC } from "react";

// Bootstrap Components
import { Container } from "react-bootstrap";

// Navbar Components
import UserButtons from "./components/UserButtons";

// Redux
import { toggleOpen } from "@/redux/slicers/slicer/sidebar";
import { useDispatch } from "react-redux";

const MainNavbar: FC = () => {
  const dispatch = useDispatch();

  return (
    <nav className="main-navbar">
      <Container fluid>
        <UserButtons />
        <div>
          <i className="fal fa-bars-staggered cursor-pointer" onClick={() => dispatch(toggleOpen())} />
        </div>
      </Container>
    </nav>
  )
}

export default MainNavbar;
