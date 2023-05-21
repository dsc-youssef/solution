// Dependencies
import { FC, lazy } from "react";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// React Router
import { Outlet } from "react-router-dom";

// React Bootstrap
import { Col, Row } from "react-bootstrap";

// Components
const Footer = lazy(() => import("@/components/Footer"));
const Navbar = lazy(() => import("@/components/Navbar"));
const Sidebar = lazy(() => import("@/components/Sidebar"));


const LayoutStructure: FC = () => {
  const direction = useSelector((state: RootState) => state.settings.direction);

  return (
    <main className={`main-layout direction-${direction}`}>
      <Sidebar />
      <Row>
        <Col xs="12">
          <Navbar />
        </Col>
        <Col xs="12" className="main-content">
          <Outlet />
          <Footer />
        </Col>
      </Row>
    </main>
  )
}

export default LayoutStructure;
