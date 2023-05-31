// Dependencies
import { FC } from "react";

// Types
import { ActionObject } from "@/types/action";
import { UserPublicData } from "@/types/user";

// Hooks
import useAuth from "@/hooks/useAuth"

// Interface
export interface ValidateActionProps {
  action: ActionObject,
  user: UserPublicData
}

const ValidateAction:FC<ValidateActionProps> = ({ action, user })=> {
  const { validateAction } = useAuth();
  return validateAction(action, user) ? action.children : <></>;
}

export default ValidateAction;