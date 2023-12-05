import { createRequestHandler } from '@remix-run/express'
import { installGlobals } from '@remix-run/node'
import express from 'express'

// @remix-run/dev module is only available in development
let remixDev

if (process.env.NODE_ENV !== 'production') {
  remixDev = await import('@remix-run/dev')
}

installGlobals()

let vite =
  process.env.NODE_ENV === 'production'
    ? undefined
    : await remixDev.unstable_createViteServer()

const app = express()

// handle asset requests
if (vite) {
  app.use(vite.middlewares)
} else {
  app.use(
    '/build',
    express.static('public/build', { immutable: true, maxAge: '1y' }),
  )
}
app.use(express.static('public', { maxAge: '1h' }))

// handle SSR requests
app.all(
  '*',
  createRequestHandler({
    build: vite
      ? () => remixDev.unstable_loadViteServerBuild(vite)
      : await import('./build/index.js'),
  }),
)

const port = 3000
app.listen(port, '0.0.0.0', () => console.log('http://localhost:' + port))
