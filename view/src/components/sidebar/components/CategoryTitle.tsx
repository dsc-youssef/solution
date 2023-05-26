// Dependencies
import { FC } from "react";

// Component Props
interface SidebarCategoryTitleProps {
  title: string,
  bg: string
}

const SidebarCategoryTitle:FC<SidebarCategoryTitleProps> = ({title, bg})=>{
  return (
    <h4 className={`sidebar-category-title bg-${bg}`}>{title}</h4>
  )
}

export default SidebarCategoryTitle;