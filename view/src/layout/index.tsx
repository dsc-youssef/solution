// Dependencies
import { FC, lazy } from "react";

// Routes
import { Route, Routes } from "react-router-dom";

// Config
import { CONFIG } from "@/utils/config";

const LayoutStructure = lazy(() => import("./Layout"));
const Layout: FC = () => {
  return (
    <Routes>
      <Route path={CONFIG.root_path} element={<LayoutStructure />}>

      </Route>
    </Routes>
  )
}

export default Layout;
