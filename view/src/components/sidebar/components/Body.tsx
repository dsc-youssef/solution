// Dependencies
import { FC } from "react";

// Components
import UserCard from "./UserCard";
import SidebarButton from "./Button";
import SidebarButtonsContainer from "./ButtonsContainer";


const Body: FC = () => {
  return (
    <div className="sidebar-body">
      <UserCard />
      <SidebarButtonsContainer title="Global">
        <SidebarButton title={"Dashboard"} icon="rocket" active={true}></SidebarButton>
        <SidebarButton title={"FAQ"} icon="info-circle"></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="Support">
        <SidebarButton title={"Create Ticket"} icon="plus"></SidebarButton>
        <SidebarButton title={"Support Tickets"} icon="ticket"></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="Customers">
        <SidebarButton title={"Create Customer"} icon="user-plus"></SidebarButton>
        <SidebarButton title={"Customers"} icon="users"></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="Products">
        <SidebarButton title={"Create Product"} icon="plus"></SidebarButton>
        <SidebarButton title={"Products"} icon="gifts"></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="Expenses">
        <SidebarButton title={"Create Expense"} icon="plus"></SidebarButton>
        <SidebarButton title={"Expenses"} icon="chart-line-down"></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title={"Sales"}>
        <SidebarButton title={"Create Sale"} icon="plus"></SidebarButton>
        <SidebarButton title={"Website"} icon="chart-line-up"></SidebarButton>
        <SidebarButton title={"Custom"} icon="coins"></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="User">
        <SidebarButton title={"Create User"} icon="user-plus"></SidebarButton>
        <SidebarButton title={"Profile"} icon="user-cog"></SidebarButton>
        <SidebarButton title={"Users"} icon="user-shield"></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="Roles">
        <SidebarButton title={"Create Role"} icon="plus"></SidebarButton>
        <SidebarButton title={"Roles"} icon="shield"></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="Invitees">
        <SidebarButton title={"Create Invite Code"} icon="plus"></SidebarButton>
        <SidebarButton title={"Invitees"} icon="user-plus"></SidebarButton>
        <SidebarButton title={"Invite Codes"} icon="code"></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="Discount Cpeons">
        <SidebarButton title={"Create Code"} icon="plus"></SidebarButton>
        <SidebarButton title={"Discount Cpeons"} icon="ticket"></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="Pages">
        <SidebarButton title={"Create Page"} icon="plus"></SidebarButton>
        <SidebarButton title={"Pages"} icon="window"></SidebarButton>
      </SidebarButtonsContainer>
      <SidebarButtonsContainer title="Modals">
        <SidebarButton title={"Create Modal"} icon="plus"></SidebarButton>
        <SidebarButton title={"Modals"} icon="box"></SidebarButton>
      </SidebarButtonsContainer>
      
    </div>
  )
}

export default Body;
