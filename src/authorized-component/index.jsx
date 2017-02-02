import AutobindComponent from 'autobind-component';
import { Set } from 'immutable';

/*
  Component that checks if the "currentUser" ( a prop on the component )
  is one of the authorized roles (defined on the route).
  You can see what roles are authorized for a route under the app-router
  this component also assumes your "default" login page will be available
  at /login; that defualt can be changed here

  Any properties that are access the "this.constructor" property are considered
  "static" (defined by the static keyword). Static properties can be overriden
  on children.

  NOTE: This is not the end-all be-all way of handing authorization on routes;
  its just one of many strategies that people have tried. Feel free to junk this
  code and replace it with your own mechanisum.
*/
class AuthorizedComponent extends AutobindComponent {

  static redirectTo = '/login';

  componentWillMount() {
    const isAuthorized = this.isAuthorized();

    if(!isAuthorized) {
      return this.onAuthFailedRedirect();
    }

    return;
  }

  onAuthFailedRedirect() {
    const { redirectTo, displayName, name } = this.constructor;
    const { router } = this.props;

    if(!router) {
      console.warn(`Attempted to redirect to ${ redirectTo } from ${displayName || name} but no router was found`);
      return;
    }

    return router.push(redirectTo);
  }

  isAuthorized() {
    const { name, displayName } = this.constructor;
    const { currentRoles, route = {} } = this.props;
    const { authorize } = route;

    if(currentRoles === undefined) {
      console.warn(`No currentRoles prop defined in ${name}. Please define currentRoles as a prop to enable authorization.`);
      return false;
    }

    if(authorize === null) {
      console.warn(`No roles (authorize) provided in ${displayName || name}; defaulting to not authorized. Define authorize on your route.`);
      return false;
    }

    const finalRequiredRoles = Set.isSet(authorize) ? authorize : Set(authorize);
    const finalCurrentRoles = Set.isSet(currentRoles) ? currentRoles : Set(currentRoles);

    return finalRequiredRoles.intersect(finalCurrentRoles).size > 0;
  }
}

export default AuthorizedComponent;
