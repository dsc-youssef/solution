// Dependencies
import { FC } from "react";

// Components
import Head from "./components/Head";
import Body from "./components/Body"; 

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


const Sidebar: FC = () => {
  const isOpen = useSelector((state:RootState)=> state.sidebar.open);

  return (
    <aside className={`sidebar ${isOpen && "active"}`}>
      <Head />
      <Body />
    </aside>
  )
}

export default Sidebar;
