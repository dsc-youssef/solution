// Dependencies
import { FC } from "react";
import { INFORMATION } from "@/utils/config";

// Assets
import solution_logo from "~/images/solution_logo/transparent/96x96.png";

const Sidebar: FC = () => {
  return (
    <aside className="sidebar card">
      <div className="card-header">
        <div className="d-flex justify-content-start align-items-center gap-3">
          <img width={40} src={solution_logo} alt="" />
          <h5 className="m-0 h5">{INFORMATION.shortcut_name}</h5>
        </div>
      </div>
      <div className="card-body">

      </div>
    </aside>
  )
}

export default Sidebar;
