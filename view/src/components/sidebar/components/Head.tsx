// Dependencies
import { FC } from "react";

// Config
import { CONFIG } from "@/utils/config";


const Head: FC = () => {
  return (
    <div className="sidebar-header">
      <div className="sidebar-brand">
        <i className="far fa-lightbulb-on brand-icon" />
        <h3 className="sidebar-brand-name">{CONFIG.app_name}</h3>
      </div>
    </div>
  )
}

export default Head;
