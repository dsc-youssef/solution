// Types
import { RouteObject } from "@/types/route";
import { ModalObject } from "@/types/modal";
import { ActionObject } from "@/types/action";
import { UserPublicData } from "@/types/user";

const useAuth = () => {

  /** validatePage
   * The function used to check if UserPublicData have access to this page
   * @param { RouteObject route }
   * @param { UserPublicData user }
   * @return { boolean }
  */
  const validatePage = (route: RouteObject, user: UserPublicData): boolean => user.pages_roles.includes(route.role);

  /** validateModal
   * This function used to check if this UserPublicData have access to this modal
   * @param { ModalObject modal}
   * @param { UserPublicData user }
   * @return { boolean }
  */
  const validateModal = (modal: ModalObject, user: UserPublicData): boolean => user.modals_roles.includes(modal.role);

  /** validateAction
   * This function used to check if this UserPublicData have access to make this action
   * @param { ActionObject action }
   * @param { UserPublicData user }
   * @return { boolean }
  */
  const validateAction = (action: ActionObject, user: UserPublicData): boolean => user.actions_roles.includes(action.role);

  return {
    validatePage,
    validateModal,
    validateAction
  }
}

export default useAuth;
