// Dependencies
import { FC } from "react";

// Types
import { ReactNode } from "react";

// Interface
export interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default AuthProvider;
