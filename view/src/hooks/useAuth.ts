// Types
import { RouteObject } from "@/types/route";
import { ModalObject } from "@/types/modal";
import { ActionObject } from "@/types/action";
import { UserPublicData, UserLoginRequest } from "@/types/user";
import { ResponseData } from "@/types/response";

// Apis
import loginApi from "@/apis/user/login";

// Hooks
import useStorage from "@/hooks/useStorage";

// Configuration
import { CONFIG } from "@/utils/config";

const useAuth = () => {
  const { removeStorage, getStorage, setStorage } = useStorage();
  
  /** This Function Used To Make Login Request 
   * @param { UserLoginRequest user }
   * @return { Promise<void | ResponseData<UserPublicData>> }
  */
  const login = async (user:UserLoginRequest):Promise<void | ResponseData<UserPublicData>> => {
    try {
      const { username, password, stayLogin } = user;
      const response:ResponseData<UserPublicData> = await loginApi({username, password});
      
      // If use is valid clear storage
      if(response.data.state){
        removeStorage(CONFIG.auth_name, "local");
        removeStorage(CONFIG.auth_name, "session");
      } 
       
      // start set storage where user is valid
      if(stayLogin) {
        response.data.state && setStorage(CONFIG.auth_name, "local", response.data.data);
      } else {
        response.data.state && setStorage(CONFIG.auth_name, "session", response.data.data);
      }
      
      return response;
    }catch(error){
      console.error(error);
    }
  }

  /** 
   * This Function Used To Check If User Is Authentication.
   * @return { boolean }
  */
  const isAuth = (): boolean => {
    return getStorage(CONFIG.auth_name, "local") || getStorage(CONFIG.auth_name, "session") ? true : false;
  }
  
  /** 
   * Tnis Function Used To Get User Authentication
   * return { UserPublicData }
  */
  const getAuth = (): UserPublicData =>{
    if(getStorage(CONFIG.auth_name, "local")) {
      return JSON.parse(getStorage(CONFIG.auth_name, "local") as string);
    }else{
      return JSON.parse(getStorage(CONFIG.auth_name, "session") as string);
    }
  }

  /** logout
   * This Function Used To Logout
   * @return { void }
  */
  const logout = (): void => {
    removeStorage(CONFIG.auth_name, "session");
    removeStorage(CONFIG.auth_name, "local");
    location.reload()
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
    login,
    logout,
    isAuth,
    getAuth,
    validatePage,
    validateModal,
    validateAction
  }
}

export default useAuth;
