// Types
import { ReactElement } from "react";

export interface ActionObject {
  name: string,
  role: string,
  key?: number,
  children: ReactElement
}
