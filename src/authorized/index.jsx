import AutobindComponent from 'autobind-component';
import React from 'react';
import { Set } from 'immutable';

export default (roles = []) => (WrappedComponent) => {
  const wrappedDisplayName = WrappedComponent.displayName || WrappedComponent.name;

  if(!roles || roles.length === 0) {
    console.warn(`Defined an authorized component without roles. No access will be allowed in ${wrappedDisplayName}`);
  }

  return class extends AutobindComponent {

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
      const { currentRoles } = this.props;

      if(currentRoles === undefined) {
        console.warn(`No currentRoles prop defined in ${wrappedDisplayName}. Please define currentRoles as a prop to enable authorization.`);
        return false;
      }

      const finalRequiredRoles = Set.isSet(roles) ? roles : Set(roles);
      const finalCurrentRoles = Set.isSet(currentRoles) ? currentRoles : Set(currentRoles);

      return finalRequiredRoles.intersect(finalCurrentRoles).size > 0;
    }

    render() {
      return (<WrappedComponent { ...this.props } />)
    }
  }
};
