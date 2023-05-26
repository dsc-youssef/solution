// Dependencies
import { FC } from "react";

// Components
import SidebarButton from "./Button";
import SidebarButtonsContainer from "./ButtonsContainer";


const Body: FC = () => {
  return (
    <div className="sidebar-body">
      <SidebarButtonsContainer isCollapsed={true} title="global">
        <SidebarButton icon="home" active={true} title="Dashboard" />
      </SidebarButtonsContainer>

      <SidebarButtonsContainer title="Other">
        <SidebarButton icon="users" title="Customers" />
        <SidebarButton icon="gift" title="Products" />
        <SidebarButton icon="dollar" title="Sales" />
        <SidebarButton icon="user-shield" title="Users" />
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="account">
        <SidebarButton icon="lock" title="Sign in" />
        <SidebarButton icon="user-plus" title="Sign up" />
      </SidebarButtonsContainer>

    </div>
  )
}

export default Body;
