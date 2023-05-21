// Dependencies
import { FC, lazy } from "react";

// Routes

const LayoutStructure = lazy(() => import("./Layout"));
const Layout: FC = () => {

  return (
    <>
      <LayoutStructure />
    </>
  )
}

export default Layout;
