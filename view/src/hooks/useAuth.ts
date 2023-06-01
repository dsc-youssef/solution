// Types
import { RouteObject } from "@/types/route";
import { ModalObject } from "@/types/modal";
import { ActionObject } from "@/types/action";
import { UserPublicData } from "@/types/user";
import { StorageType } from "@/types/storage";

// Hooks
import useStorage from "@/hooks/useStorage";

// Configuration
import { CONFIG } from "@/utils/config";

const useAuth = () => {
  const { removeStorage, getStorage } = useStorage();
  
  /** isAuth 
   * This Function Used To Check If User Is Authentication.
   * @return { boolean }
  */
  const isAuth = (): boolean => {
    return getStorage(CONFIG.auth_name, "local") || getStorage(CONFIG.auth_name, "session") ? true : false;
  }
  
  /** logout 
   * This Function Used To Make User Logout
   * @param { StorageType storage }
   * @param { boolean reload }
   * @return { void }
  */
   const logout = (storage:StorageType, reload:boolean = true):void => {
     removeStorage(CONFIG.auth_name, storage);
     reload ? window.location.reload() : null;
   }
  
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
    isAuth,
    logout,
    validatePage,
    validateModal,
    validateAction
  }
}

export default useAuth;
