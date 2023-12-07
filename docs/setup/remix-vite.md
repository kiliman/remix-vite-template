# Remix Vite Setup

Remix v2.2+ introduced Vite support as an unstable plugin.

https://remix.run/docs/en/main/future/vite

# Installation

```bash
npx create-remix@latest --template remix-run/remix/templates/unstable-vite-express
```

This initializes a Remix app using the Express server.

### Packages

The following packages are added:

- `@remix-run/express`
- `@remix-run/node`
- `@remix-run/react`
- `@remix-run/dev`
- `vite`
- `express`
- `morgan`

### Scripts

The following scripts are added to _package.json_:

- `dev` - runs the express server in development mode
- `build` - runs vite to build client and server in production mode
- `start` - starts the web app in production mode
- `clean` - deletes the build and public/build folders
- `nuke` - runs clean as well as deleting node_modules and package-lock.json

### Configuration

The following configuration files are used:

- vite.config.js
- remix.config.js

Remix is now a Vite plugin. Although technically, you no longer need a
_remix.config.js_ file, as you can inline the configuration in the plugin call,
I found it easier to keep it separate and import it from _vite.config.js_.

I also show how you can create a simple Vite plugin to add `morgan` support in
the Vite dev server.

### Setup

The following files are added:

- server.mjs

The Express server determines if it is running in production or development.
For development, it will create a Vite dev server and pass all app requests
to the Vite handler.

When deploying to Fly.io, the Docker file will remove all the dev dependencies,
so we must use a dynamic import when importing from `@remix-run/dev`, as it
will not be present on production.

Also notice how in production, we add the `morgan` middleware via `app.use()`
like you would normally do. In production, Vite is no longer involved. It was
only responsible for building the client and server bundles.
