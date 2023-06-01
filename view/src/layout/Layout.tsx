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
const Footer = lazy(() => import("@/components/footer"));
const Navbar = lazy(() => import("@/components/navbar"));
const Sidebar = lazy(() => import("@/components/sidebar"));

const LayoutStructure: FC = () => {
  const { direction, language } = useSelector((state: RootState) => state.settings);


  return (
    <main className={`main-layout direction-${direction} lang-${language}`}>
      <Sidebar />
      <Row className="main-content">
        <Col xs="12">
          <Navbar />
        </Col>
        <Col xs="12">
          <Outlet />
          <Footer />
        </Col>
      </Row>
    </main>
  )
}

export default LayoutStructure;
