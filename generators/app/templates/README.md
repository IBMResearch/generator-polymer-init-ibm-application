# <%= applicationName %>

> <%= applicationDescription %>

## Prerequisites

Install [Polymer CLI](https://github.com/Polymer/polymer-cli) using [npm](https://www.npmjs.com)
(we assume you have pre-installed [node.js](https://nodejs.org)).

```
npm install -g polymer-cli
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

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

The included `gulpfile.js` relies on [the `polymer-build` library](https://github.com/Polymer/polymer-build),
the same library that powers Polymer CLI. Follow the comments in the
`gulpfile.js` to add additional steps.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
polymer serve build/bundled
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
