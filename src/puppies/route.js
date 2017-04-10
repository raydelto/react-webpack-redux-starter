export default () => ({
  path: 'puppies',
  getComponent: (nextState, cb) => require.ensure([], require => {
    const Puppies = require('./index').default;

    cb(null, Puppies);
  })
});
