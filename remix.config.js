import { flatRoutes } from 'remix-flat-routes'
/** @type {import('@remix-run/dev/dist/vite/plugin').VitePluginConfig} */
export default {
  ignoredRouteFiles: ['**/*'],
  serverModuleFormat: 'esm',
  routes: async defineRoutes => {
    return flatRoutes('routes', defineRoutes, {
      ignoredRouteFiles: ['**/*.test.{js,jsx,ts,tsx}', '**/__*.*'],
    })
  },
}
