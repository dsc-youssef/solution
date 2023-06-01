// Dependencies
import { FC } from "react";

// Components
import SidebarButton from "./Button";
import SidebarButtonsContainer from "./ButtonsContainer";


const Body: FC = () => {
  return (
    <div className="sidebar-body">
      <SidebarButtonsContainer title="Sales">
        <SidebarButton title={"Home"} icon="home" active={true}></SidebarButton>
      </SidebarButtonsContainer>
    </div>
  )
}

export default Body;
