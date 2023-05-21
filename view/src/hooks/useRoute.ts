// Types
import { RouteObject, RoutesArray } from "@/types/route";
import { User } from "@/types/user";

// Config
import { INFORMATION } from "@/utils/config";

/** useRoute
  * - Create a Route Object
  * - Create Routes Array
  * - Route Validate
  * - Change Title
*/

const useRoute = () => {
  /** createRouteObject
    * This Function Used To Create a Route Object.
    * @param RouteObject route
    * @return object
  */
  const createRouteObject = (route: RouteObject): RouteObject => route;

  /** createRoutesArray
    * This Function Used To Create Array Of Routes Object.
    * @param RoutesArray routes
    * @return array
  */
  const createRoutesArray = (routes: RoutesArray): RoutesArray => routes;

  /** routeValidate
    * This Function Used To Check If Current User Have Access To This Route.
    * @param RouteObject route,
    * @param User user
    * @param number publicRole
    * @return boolean
  */
  const routeValidate = (route: RouteObject, user: User, publicRole: number) => route?.accessRoles?.filter((role: number) => user?.roles?.includes(role) || role === publicRole);

  /** changeTitle
   * This Function Used To Change Page Title.
   * @param string title
   * @return void
   */
  const changeTitle = (title: string) => document.title = `${title} | ${INFORMATION.shortcut_name}`;

  return {
    createRouteObject,
    createRoutesArray,
    routeValidate,
    changeTitle
  }
}

export default useRoute;
