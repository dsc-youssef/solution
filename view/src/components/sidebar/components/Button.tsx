// Dependencies
import { FC } from "react";

// React Components

// Component Props
export interface SidebarDropdownProps {
  icon: string,
  title: string | number,
  active?: boolean
}

const SidebarDropdown: FC<SidebarDropdownProps> = ({ icon, title, active }) => {

  return (
    <button type="button" className={`sidebar-button ${active && "active"}`}>
      <i className={`fad fa-${icon} btn-icon`} />
      <p className="btn-title">{title}</p>
    </button>
  )
}

export default SidebarDropdown;
