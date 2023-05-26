// Dependencies
import { FC } from "react";

// Components
import SidebarButton from "./Button";
import CategoryTitle from "./CategoryTitle";

const Body: FC = () => {
  return (
    <div className="sidebar-body">
      <CategoryTitle bg="success" title="public" />
      <SidebarButton icon="rocket" active={true}  title="Dashboard" />
      <SidebarButton icon="users" title="Customers" />
      <CategoryTitle bg="primary" title="Money" />
      <SidebarButton icon="gift" title="Products" />
      <SidebarButton icon="dollar" title="Sales" />
      <SidebarButton icon="user-shield" title="Users" />
    </div>
  )
}

export default Body;
