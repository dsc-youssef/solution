// Dependencies
import { FC, lazy } from "react";

// Types
import { ReactNode } from "react";

// React Router
import { Routes, Route } from "react-router-dom";

// Auth
import useAuth from "@/hooks/useAuth";
const Login = lazy(() => import("./Login"));

// Interface
export interface AuthProviderProps {
  children: ReactNode,
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { isAuth } = useAuth();

  return isAuth() as boolean ? (
    <>
      {children}
    </>
  ) : (
    <Routes>
      <Route path="*" element={<Login />} />
    </Routes>
  )




}

export default AuthProvider;
