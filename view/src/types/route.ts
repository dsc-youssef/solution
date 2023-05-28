// Types
import { FC } from "react";

export interface RouteObject {
  path: string,
  element: FC,
  category?: string,
  key?: string | number,
  roles: string[]
}

