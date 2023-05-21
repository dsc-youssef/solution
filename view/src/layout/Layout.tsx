// Dependencies
import { FC, lazy } from "react";

// React Router
import { Outlet } from "react-router-dom";

// React Bootstrap
import { Col, Row } from "react-bootstrap";

// Components
const Footer = lazy(()=> import("@/components/footer"));
const Navbar = lazy(()=> import("@/components/navbar"));
const Sidebar = lazy(()=> import("@/components/sidebar"));

const LayoutStructure:FC = ()=> {
  return (
    <main className="w-100 min-vh-100 d-flex bg-gray-100">
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
