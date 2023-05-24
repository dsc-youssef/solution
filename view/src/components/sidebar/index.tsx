// Dependencies
import { FC } from "react";

// React Components
import { Container } from "react-bootstrap";

// Components
import SidebarButton from "./components/Button";
import Head from "./components/Head";

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <Container fluid>
        <Head />
        <SidebarButton title={"Dashboard"} icon="rocket">
          <>lore</>
        </SidebarButton>
        <SidebarButton title={"Sales"} icon="dollar">
          <>hello</>
        </SidebarButton>
        <SidebarButton title={"Products"} icon="gifts">
          <>hello</>
        </SidebarButton>
        <SidebarButton title={"Expenses"} icon="chart-line-down">
          <>hello</>
        </SidebarButton>
      </Container>
    </aside>
  )
}

export default Sidebar;
