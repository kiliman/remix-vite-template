import { flatRoutes } from 'remix-flat-routes'
/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/*'],
  serverModuleFormat: 'esm',
  routes: async defineRoutes => {
    return flatRoutes('routes', defineRoutes)
  },
}
