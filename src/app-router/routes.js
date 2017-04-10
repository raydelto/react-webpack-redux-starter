import App from 'app';
const ctx = require.context('../', true, /route\.js/);

export const childRoutes = ctx.keys()
  .filter(item => item.indexOf('app-router') === -1)
  .map(item => ctx(item));

/*
  Configuration of our routes. We've opted to stick routing for individual sub-routes
  in their "parent" components; but theres nothing stoping you from defining them in here.
  We are syncronously loading the "App" component as its the root component for the
  entire application.

  The sub-routes we've defined take in the store becasue they
  define their routes asyncronously. Go take a look at the Counter route code
  for more information.
*/
export default (store) => ({
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/counter') },
  childRoutes: childRoutes.map(route => route.default(store))
});
