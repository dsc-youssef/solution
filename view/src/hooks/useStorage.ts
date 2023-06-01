// Types
import { StorageType } from "@/types/storage";

const useStorage = ()=> {
  
  /** setStorage 
   * This Function Used To Create or Update a ( Session | Local ) Storage.
   * @param { string name }
   * @param { StorageType storage }
   * @param { data }
   * @return { void }
  */
  const setStorage = (name:string, storage:StorageType, data:any = {})=> {
    switch (storage) {
      case "local":
        localStorage.setItem(name, JSON.stringify(data));
        break;
      case "session":
        sessionStorage.setItem(name, JSON.stringify(data));
        break;
      default:
        throw new Error("You Can Use Local And Session Storage Only.");
        break;
    }
  }
  
  /** getStorage
   * This Function Used To Get Storage Data.
   * @param { string name }
   * @param { StorageType storage }
   * @return { any }
  */
  const getStorage = (name:string, storage: StorageType)=> {
    switch (storage) {
      case "local":
        return  localStorage.getItem(name);
        break;
      case "session":
        return sessionStorage.getItem(name);
        break;
      default:
        throw new Error("You Can Use Local And Session Storage Only.");
        break;
    }
  }
  
  /** removeStorage
   * This Function Used To Remove a Storage.
   * @param { string name }
   * @param { StorageType storage }
   * @return { any }
  */
  const removeStorage = (name:string, storage: StorageType)=> {
    switch (storage) {
      case "local":
        return  localStorage.remove(name);
        break;
      case "session":
        return sessionStorage.remove(name);
        break;
      default:
        throw new Error("You Can Use Local And Session Storage Only.");
        break;
    }
  }
  
  return {
    setStorage,
    getStorage,
    removeStorage
  }
}

export default useStorage;