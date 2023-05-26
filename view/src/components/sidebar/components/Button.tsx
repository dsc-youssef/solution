// Dependencies
import { FC } from "react";

// React Components

// Component Props
export interface SidebarDropdownProps {
  icon: string,
  title: string | number
}

const SidebarDropdown: FC<SidebarDropdownProps> = ({ icon, title }) => {

  return (
    <div className="sidebar-button">

    </div>
  )
}

export default SidebarDropdown;
