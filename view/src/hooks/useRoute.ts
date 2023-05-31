// Types
import { RouteObject } from "@/types/route";

// Config
import { CONFIG } from "@/utils/config";

const useRoute = () => {
  /** createRouteObject
    * This Function Used To Create a Route Object.
    * @param { RouteObject route }
    * @return { RouteObject }
  */
  const createRouteObject = (route: RouteObject): RouteObject => route;

  /** createRoutesArray
    * This Function Used To Create Array Of Routes Object.
    * @param { RouteObject[] routes }
    * @return { RouteObject[] }
  */
  const createRoutesArray = (routes: RouteObject[]): RouteObject[] => routes;

  /** setTitle
   * This Function Used To Change Page Title.
   * @param { string title }
   * @return { void }
   */
  const setTitle = (title: string): void => {
    document.title = `${title} | ${CONFIG.shortcut_name}`
  };

  return {
    createRouteObject,
    createRoutesArray,
    setTitle
  }
}

export default useRoute;
