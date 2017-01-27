# react-webpack-redux-starter

Personal starter kit for React, Webpack2 and Redux starter kit.
Nothing is guaranteed to work, nothing is guaranteed to be maintained.

## Dependencies

| npm package name | Licence      | Explanation                                                                     |
|------------------|--------------|---------------------------------------------------------------------------------|
| react            | BSD-3-Clause | The React web framework. Responsible for managing application structure.        |
| redux            | MIT          | A Flux implementation. Responsible for storing data and re-rendering React apps |
| react-redux      | MIT          | Hooks between React and Redux                                                   |
| immutable        | BSD-3-Clause | An immutable data structure implementation for JS                               |
| react-dom        | BSD-3-Clause | Responsible for taking React apps and turning them into browser DOM.            |
| redux-immutable  | BSD-3-Clause | Allows the use of immutable objects at the root redux reducers.                 |
| react-immutable-proptypes | MIT | Handles proptypes for immutable data |
| react-autobind | MIT | Helper to bind context in react components |
| redux-thunk | MIT | Handles "async" actions in redux. |
| fetch-ponyfill | MIT | CommonJS wrapepr for Github's fetch polyfill |
| bluebird | MIT | Promises implementation. Preferred over es6-promise for it's performance |
| redux-actions | MIT | Helpers for creating and handling actions for redux |
| reselect | MIT | Helpers for manipulating data stores efficently |
| normalizr | MIT | Handles normalization (flattening) of deeply nested JSON. |
| redux-normalizr-middleware | MIT | Handles "normalization" of data passing through redux |
| aws-sdk | Apache-2.0 | Used to demo some functionality in the app |
| react-facebook-login | MIT | Simplify the login process with Facebook, primarily for demoing aws-sdk |

## Development Dependencies

| npm package name                | Licence     | Explanation                                                                                                                                        |
|---------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| @kadira/storybook               | MIT          | Responsible for rendering and managing demos of individual components                                                                              |
| @kadira/storybook-addon-knobs   | MIT          | Adds the ability to change elements on components rendered                                                                                         |
| @kadira/storybook-addon-options | MIT          | Allows the customization of storybook UI elements such as the dock                                                                                 |
| babel-core                      | MIT          | Responsible for converting ES6/7 to ES5                                                                                                            |
| babel-loader                    | MIT          | Hooks for Webpack to communicate with babel-core                                                                                                   |
| babel-preset-es2015             | MIT          | Responsible for transpiling ES2015 JS to ES5                                                                                                       |
| babel-preset-react              | MIT          | Responsible for transpiling JSX to JS                                                                                                              |
| babel-preset-stage-0            | MIT          | Responsible for transpiling ES7 features to ES5                                                                                                    |
| chai                            | MIT          | Assertion library for karma                                                                                                                        |
| chai-enzyme                     | MIT          | Simplifies interactions with enzyme for testing React components                                                                                   |
| clean-webpack-plugin            | MIT          | Handles deleting build folders / temporary resources                                                                                               |
| css-loader                      | MIT          | Loads CSS files and handles inject at runtime                                                                                                      |
| enzyme                          | MIT          | Simplifies testing React components                                                                                                                |
| extract-text-webpack-plugin     | MIT          | Handles converting injection scripts from scss-loader, css-loader and  style-loader and handles creation of .css files                             |
| file-loader                     | MIT          | Handles converting a file import into a path; also handles optimization and  minification of general files.                                        |
| html-webpack-plugin             | MIT          | Handles generation of HTML files that will inject paths to files generated by webpack                                                              |
| html-webpack-template           | MIT          | Simple templates for html-webpack-plugin to use                                                                                                    |
| json-loader                     | MIT          | Handles loading of JSON files                                                                                                                      |
| karma                           | MIT          | Handles test execution and reporting                                                                                                               |
| karma-chai                      | MIT          | Hooks between karma and chai                                                                                                                       |
| karma-chrome-launcher           | MIT          | Handles the launching of Chrome by Karma                                                                                                           |
| karma-mocha                     | MIT          | Handles hooks between karma and mocha                                                                                                              |
| karma-mocha-reporter            | MIT          | Handles reporting of test results by mocha                                                                                                         |
| karma-phantomjs-launcher        | MIT          | Handles the launching of the PhantomJS browser.                                                                                                    |
| karma-sourcemap-loader          | MIT          | Handles loading and managing source maps for JS.                                                                                                   |
| karma-webpack                   | MIT          | Handles hooks between karma and webpack                                                                                                            |
| lite-server                     | MIT          | Launches a minimalistic webserver for running the generated source from webpack                                                                    |
| mocha                           | MIT          | Handles management and organziation of unit tests in JS.                                                                                           |
| node-sass                       | MIT          | Handles converting SASS files into CSS files.                                                                                                      |
| phantomjs-prebuilt              | Apache 2.0   | Handles downloading and storage of the PhantomJS web-browser. NOTE: this will either download a binary from a remote source OR compile from source |
| react-addons-test-utils         | BSD-3-Clause | Adds helper functions for react tests. Primarily used by Enzyme                                                                                    |
| sass-loader                     | MIT          | Handles loading of SASS files into webpack                                                                                                         |
| style-loader                    | MIT          | Handles loading "style" files into webpack (SASS, CSS, LESS, etc)                                                                                  |
| webpack                         | MIT          | Handles bundling, minification, mapping, bundling and linking of any asset type.                                                                   |
| webpack-bundle-analyzer         | MIT          | Analyzes resources produced by Webpack and creates an interactive interface for analysis                                                           |
| webpack-dev-server              | MIT          | Handles calling webpack and hosting of assets for local development                                                                                |
| webpack-merge                   | MIT          | Handles merging multiple webpack configuration files                                                                                               |
| isparta-loader                  | MIT          | Handles calculating for pre-transpiled source |
| karma-coverage | WTFPL | Responsible for generating coverage reports for Karma |
