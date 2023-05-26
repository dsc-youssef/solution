// Dependencies
import { FC } from "react";

// Components
import Head from "./components/Head";
import Body from "./components/Body";

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <Head />
      <Body />
    </aside>
  )
}

export default Sidebar;
