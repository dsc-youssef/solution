// Dependencies
import { FC } from "react";

// Bootstrap Components
import { Tabs, Tab, Container } from "react-bootstrap";

// Config
import { CONFIG } from "@/utils/config";

// Auth Components
import Login from "./Login";
import Register from "./Register";

const AuthComponent: FC = () => {
  return (
    <main className={`auth`}>
      <Container className="flex items-center flex-col ">
        <div className="mb-5 mt-4 flex flex-col items-center justify-center gap-2">
          <i className="fal fa-lightbulb-on text-white text-5xl" />
          <h3 className="text-white text-2xl text-medium">{CONFIG.app_name}</h3>
        </div>
        <div className="auth-card">
          <Tabs defaultActiveKey="login" className="mb-3">
            <Tab eventKey="login" title="Sign in">
              <Login />
            </Tab>
            <Tab eventKey="register" title="Sign up">
              <Register />
            </Tab>
          </Tabs>
        </div>
      </Container>
    </main>
  )
}

export default AuthComponent;
