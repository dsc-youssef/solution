// Dependencies
import { FC, useState, ReactNode } from "react";

// React Components
import { Collapse, ListGroup } from 'react-bootstrap';

// Component Props
export interface SidebarDropdownProps {
  children?: ReactNode,
  icon: string,
  title: string | number
}

const SidebarDropdown: FC<SidebarDropdownProps> = ({ children, icon, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <ListGroup className="user-select-none">
      <ListGroup.Item type="button" className="border-0 text-white bg-transparent d-flex justify-content-between align-items-center" onClick={() => setOpen(!open)}>
        <div className="d-flex align-items-center gap-3">
          <i className={`fad fa-${icon}`} />
          <span className="font-weight-bold text-capitalize">{title}</span>
        </div>
        <i className="fal fa-angle-down" />
      </ListGroup.Item>
      <ListGroup.Item className="bg-transparent border-0 px-5">
        <Collapse in={open}>
          <div>
            {children}
          </div>
        </Collapse>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default SidebarDropdown;
