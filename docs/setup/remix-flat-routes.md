# `remix-flat-routes` Setup

Remix v2 defaults to using the flat-routes convention. This package extends the
`v2` convention to support _hybrid_ routes, extended route filenames, custom
param prefix, etc.

### Packages

The following packages are added:

- `remix-flat-routes`

### Configuration

The following configuration files are updated:

- remix.config.js

Remix supports custom routes via the `routes` property. First we need to tell
Remix to ignore all files in the `routes` folder, so Remix won't process them
using the `v2` convention.

We call `flatRoutes` and ignore all the test files/folders.

```diff
+  import { flatRoutes } from 'remix-flat-routes'
/** @type {import('@remix-run/dev').AppConfig} */
export default {
-  ignoredRouteFiles: ['**/.*'],
+  ignoredRouteFiles: ['**/*'],
   serverModuleFormat: 'esm',
+  routes: async defineRoutes => {
+    return flatRoutes('routes', defineRoutes, {
+      ignoredRouteFiles: ['**/*.test.{js,jsx,ts,tsx}', '**/__*.*'],
+    })
+  },
}
```
