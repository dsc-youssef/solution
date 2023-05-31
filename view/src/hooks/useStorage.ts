// Types
import { StorageType, StorageData } from "@/types/storage";
import { UserPublicData } from "@/types/user";
import { SettingsState } from "@/redux/slicers/initialState/settings";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Configuration
import { CONFIG } from "@/utils/config";

const useStorage = () => {
  const userData: UserPublicData = useSelector((state: RootState) => state.user);
  const settingsData: SettingsState = useSelector((state: RootState) => state.settings);
  const storageData = { user: userData, settings: settingsData };

  /** setStorage
   * This Function Used To Insert Data To ( Local | Session ) Storage.
   * @param { StorageType storage }
   * @param { StorageData data }
   * @return { void }
  */
  const setStorage = (storage: StorageType, data: StorageData) => {
    switch (storage) {
      case "local":
        localStorage.setItem(CONFIG.storage_name, JSON.stringify(data));
        break;
      case "session":
        sessionStorage.setItem(CONFIG.storage_name, JSON.stringify(data));
        break;
    }
  }

  /** getStorage
   * This Function Used To Get ( Local | Session ) Storage Data.
   * @param { StorageType storage }
   * @return { StorageData }
  */
  const getStorage = (storage: StorageType): StorageData => {
    switch (storage) {
      case "local": {
        return JSON.parse(localStorage.getItem(CONFIG.storage_name) as string) || storageData
      }
      case "session": {
        return JSON.parse(sessionStorage.getItem(CONFIG.storage_name) as string) || storageData
      }
    }
  }

  /** setUser
   * This Function Used To Set User Data In ( session & local ) storage.
   * @param { StorageType storage }
   * @param { UserPublicData user }
   * @return { void }
  */
  const setUser = (storage: StorageType, user: UserPublicData): void => {
    setStorage(storage, { ...getStorage(storage), user });
  }

  /** getUser
   * This Function Used To Get User Data From ( session & local ) Storage
   * @param { StorageType storage }
   * @return { UserPublicData }
   */
  const getUser = (storage: StorageType): UserPublicData => getStorage(storage).user;

  /** setSettings
   * This Function Used To Set Page Settings In ( local & session ) Storage
   * @param { StorageType storage }
   * @param { SettingsState data }
   * @return { void }
   */
  const setSettings = (storage: StorageType, settings: SettingsState): void => {
    setStorage(storage, { ...getStorage(storage), settings });
  }

  /** getSettings
   * This Function Used To Get User Data From ( session & local ) Storage
   * @param { StorageType storage }
   * @return { SettingsState }
   */
  const getSettings = (storage: StorageType): SettingsState => getStorage(storage).settings;

  return {
    setStorage,
    getStorage,
    setUser,
    getUser,
    setSettings,
    getSettings
  }
}

export default useStorage;
