// Types
import { FC } from "react";

export interface RouteObject {
  path: string,
  name: string,
  icon?: string,
  element: FC,
  category?: string,
  key?: string | number,
  role: string
}

