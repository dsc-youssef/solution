// Dependencies
import { FC } from "react";

// React Components


// Components
import Head from "./components/Head";
import Body from "./components/Body";

// Style File ( assets/styles/scss/custom/components/sidebar )

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <Head />
      <Body />
    </aside>
  )
}

export default Sidebar;
