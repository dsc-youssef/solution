// Dependencies
import { FC } from "react";

// Types
import { RouteObject } from "@/types/route";
import { UserPublicData } from "@/types/user";

// Router
import { Route } from "react-router-dom";

// Hooks
import useAuth from "@/hooks/useAuth";

// Interface
export interface ValidateRouteProps {
  route: RouteObject,
  user: UserPublicData
}

const ValidateRoute: FC<ValidateRouteProps> = ({ route, user })=>{
  const { validatePage } = useAuth();
  return validatePage(route, user) ? (<Route path={route.path} element={<route.element />} />) : <></>;
}

export default ValidateRoute;