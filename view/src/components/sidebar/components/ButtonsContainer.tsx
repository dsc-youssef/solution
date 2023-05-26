// Dependencies
import { FC, ReactNode, useState } from "react";

// Bootstrap Container
import { Collapse } from "react-bootstrap";

// Props interface
export interface SidebarButtonsContainerProps {
  title: string,
  children: ReactNode,
  isCollapsed?: boolean,
}


const SidebarButtonsContainer: FC<SidebarButtonsContainerProps> = ({ children, title, isCollapsed }) => {
  const [isOpen, setIsOpen] = useState<boolean>(isCollapsed || false);

  return (
    <div className="sidebar-category">
      <div className="sidebar-category-head" onClick={() => setIsOpen(!isOpen)}>
        <p className="sidebar-category-title">{title}</p>
        <i className={`fal fa-angle-${isOpen ? "up" : "down"}`} />
      </div>
      <div>
        <Collapse in={isOpen}>
          <div>
            <div className="flex flex-col">
              {children}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}


export default SidebarButtonsContainer;
