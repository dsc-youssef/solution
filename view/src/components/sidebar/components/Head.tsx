// Dependencies
import { FC } from "react";

// Config
import { CONFIG } from "@/utils/config";

// Assets
import transparentLogo from "~/images/solution_logo/transparent/96x96.png";


const Head: FC = () => {
  return (
    <div className="sidebar-header">
      <div className="sidebar-brand">
        <img className="sidebar-logo" src={transparentLogo} alt="sidebar-logo" />
        <h3 className="sidebar-brand-name">{CONFIG.shortcut_name}</h3>
      </div>
    </div>
  )
}

export default Head;
