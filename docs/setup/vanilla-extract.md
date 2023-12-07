# Vanilla Extract Setup

Vanilla Extract is a library to create zero-runtime stylesheets in TypeScript

https://vanilla-extract.style/

### Packages

The following packages are added:

- `@vanilla-extract/css`

The following _dev_ packages are added:

- `@vanilla-extract/vite-plugin`

### Configuration

The following configuration files are used:

- vite.config.js

```diff
+ import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

  export default defineConfig({
    plugins: [
+     vanillaExtractPlugin(),
      morganPlugin(),
      remix(remixConfig),
      tsconfigPaths(),
    ],
  })
```

Import the `vanillaExtractPlugin` and add it to your vite `plugins`

### Usage

Create a collocated _route.tsx_ and _route.css.ts_ file.

```ts
// routes/vanilla/route.tsx
import * as styles from './route.css'

export default function Component() {
  return (
    <div className={styles.container}>
      Hello Vanilla Extract!
    </div>
  )
}

```

```ts
// routes/vanilla/route.css.ts
import { style } from '@vanilla-extract/css'

export const container = style({
  backgroundColor: `lightblue`,
  padding: `2rem`,
})
```
