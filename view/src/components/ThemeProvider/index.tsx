// Dependencies
import { FC, ReactNode } from "react";

// Theme
import layoutCoverBackground from "~/images/auth_background.svg";

export interface ThemeProviderProps {
  children?: ReactNode
}



const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <main className="theme-provider">
      <img className="layout-cover-background" src={layoutCoverBackground} alt="" />
      {children}
    </main>
  )
}

export default ThemeProvider;
