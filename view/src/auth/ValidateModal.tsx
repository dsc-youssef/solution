// Dependencies
import { FC } from "react";

// Types
import { UserPublicData } from "@/types/user";
import { ModalObject } from "@/types/modal";

// Hooks 
import useAuth from "@/hooks/useAuth";

// Interface
export interface ValidateModalProps {
  user: UserPublicData,
  modal: ModalObject
}

const ValidateModal:FC<ValidateModalProps> = ({ user, modal })=> {
  const { validateModal } = useAuth();
  return validateModal(modal, user) ? <>Modal</> : <></>
}

export default ValidateModal;