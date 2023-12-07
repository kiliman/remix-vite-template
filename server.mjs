import * as fs from 'node:fs'
import { createRequestHandler } from '@remix-run/express'
import { installGlobals } from '@remix-run/node'
import chalk from 'chalk'
import express from 'express'
import morgan from 'morgan'

const start = Date.now()

// @remix-run/dev module is only available in development
let remixDev
let viteVersion

if (process.env.NODE_ENV !== 'production') {
  // get the vite version from the vite package.json
  viteVersion = JSON.parse(
    fs.readFileSync('node_modules/vite/package.json'),
  ).version
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
  // add morgan here for production only
  // dev uses morgan plugin, otherwise it spams the console with HMR requests
  app.use(morgan('tiny'))
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
app.listen(port, '0.0.0.0', () => {
  if (process.env.NODE_ENV === 'production') {
    console.log('http://localhost:' + port)
  } else {
    // since we're using a custom server, emulate what vite dev server prints

    const elapsed = Date.now() - start

    console.log(
      `  ${chalk.greenBright.bold('VITE')} ${chalk.green(
        `v${viteVersion}`,
      )} ready in ${chalk.bold(elapsed)} ms`,
    )
    console.log()
    console.log(
      `  ${chalk.greenBright.bold('➜')}  ${chalk.bold('Local:')}   ${chalk.cyan(
        'http://localhost:' + port,
      )}`,
    )
    console.log()
    console.log(`  ${chalk.yellow('⚠️  Remix support for Vite is unstable')}`)
    console.log(`  ${chalk.yellow('   and not recommended for production')}`)
    console.log()
  }
})
