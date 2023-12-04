# remix-vite-2.2.0

This repo uses the unstable Vite support from Remix v2.2.0.

This template also creates a simple Vite plugin to enable HTTP logging via `morgan`.
I've also configured TailwindCSS using `postcss` as described in the documentation.

In order for HMR to work, we need to resolve the React hydration errors. I did
this by installing the React 18.3 Canary version.
