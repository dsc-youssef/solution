// Dependencies
import { FC, lazy } from "react";

// Routes

const LayoutStructure = lazy(()=> import("./Layout"));
const Layout:FC = ()=>{
 
  return (
    <main className="main-layout">
      <LayoutStructure />
    </main>
  )
}

export default Layout;