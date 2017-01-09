# <%= applicationName %>

> <%= applicationDescription %>

## Prerequisites

Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using [npm](https://www.npmjs.com)
(we assume you have pre-installed [node.js](https://nodejs.org)).

```
npm install -g polymer-cli
```

Install dependencies:

```
npm install && bower install
```

## Start the development server

This command serves the app at `http://localhost:8080` and provides basic URL
routing for the app:

```
polymer serve
```

## Build

```
npm run build
```

This will create a `build/` folder containing a bundled (vulcanized) build, run
through HTML, CSS, and JS optimizers.

The included `gulpfile.js` relies on [the `polymer-build` library](https://github.com/Polymer/polymer-build),
the same library that powers Polymer CLI. Follow the comments in the
`gulpfile.js` to add additional steps.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
polymer serve build
```

## Run lint

This command will run [ESLint](https://github.com/eslint/eslint) with the
[IBM Research ESLint shareable config](https://github.com/IBMResearch/eslint-config-ibmresearch):

```
npm run lint
```

## Run tests

This command will run [Web Component Tester](https://github.com/Polymer/web-component-tester)
against the browsers currently installed on your machine:

```
polymer test
```

### Adding a new view

You can extend the app by adding more views that will be demand-loaded e.g.
based on the route, or to progressively render non-critical sections of the
application. Each new demand-loaded fragment should be added to the list of
`fragments` in the included `polymer.json` file. This will ensure those
components and their dependencies are added to the list of pre-cached components
(and will have bundles created in the fallback `bundled` build).
