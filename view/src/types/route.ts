// Types
import { ReactNode } from "react";

export interface RouteObject {
  path: string,
  element: ReactNode,
  key?:string|number,
  accessRoles?:number[]
}

export interface RoutesArray {
  routes: RouteObject[]
}

