import { injectAsyncReducer } from 'store';

/*
  Here we define the greeter route. In contrast from the default App route,
  we are defining our route (and reducer) asyncronously. This causes a
  "bundle split" in the application. This tells Webpack to create a seperate
  file and load it if, and only if, this route is accessed. This lets
  our "critical path" (the intial application load) as minimal as possible.

  We also asyncronously load our reducer in order to allow any API specific
  code to be split out as well.
*/
export default (store) => ({
  path: 'greeter',
  getComponent: (nextState, cb) => require.ensure([], require => {
    const Greeter = require('./greeter.container').default;
    const reducer = require('./reducer');
    const sagas = require('./sagas').default;
    injectAsyncReducer(store, reducer.REDUCER_NAME, reducer.default, sagas);
    cb(null, Greeter);
  })
});
