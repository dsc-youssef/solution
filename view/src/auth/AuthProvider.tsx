// Dependencies
import { FC, lazy } from "react";

// Types
import { ReactNode } from "react";

// React Router
import { Routes, Route } from "react-router-dom";

// Auth
import useAuth from "@/hooks/useAuth";
const AuthComponent = lazy(() => import("./AuthComponent"));

// Interface
export interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { isAuth } = useAuth();

  return isAuth() ? (
    <>
      {children}
    </>
  ) : (
    <Routes>
      <Route path="*" element={<AuthComponent />} />
    </Routes>
  )




}

export default AuthProvider;
