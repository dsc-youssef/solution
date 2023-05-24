// Dependencies
import { FC } from "react";

// Config
import { CONFIG } from "@/utils/config";

// Assets
import transparentLogo from "~/images/solution_logo/transparent/96x96.png";


const Head: FC = () => {
  return (
    <div className="card-header py-4 d-flex align-items-center gap-3">
      <img width={30} src={transparentLogo} />
      <h5 className="text-white m-0">{CONFIG.shortcut_name}</h5>
    </div>
  )
}

export default Head;
