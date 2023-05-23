// Types
import { RouteObject, RoutesArray } from "@/types/route";
import { User } from "@/types/user";

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
    * @param { RoutesArray routes }
    * @return { RoutesArray }
  */
  const createRoutesArray = (routes: RoutesArray): RoutesArray => routes;

  /** routeValidate
    * This Function Used To Check If Current User Have Access To This Route.
    * @param { RouteObject route }
    * @param { User user }
    * @param { number publicRole }
    * @return { boolean | number[] | undefined }
  */
  const routeValidate = (route: RouteObject, user: User, publicRole: number): boolean | number[] | undefined => route?.accessRoles?.filter((role: number) => user?.roles?.includes(role) || role === publicRole);

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
    routeValidate,
    setTitle
  }
}

export default useRoute;
