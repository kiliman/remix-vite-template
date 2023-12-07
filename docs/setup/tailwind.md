# Tailwind CSS setup

Tailwind setup in Vite is slightly different from non-Vite Remix.

### Packages

The following packages are added:

- `tailwindcss`
- `postcss`
- `autoprefixer`
- `prettier-plugin-tailwindcss`

The `prettier` plugin is included to sort class names in a consistent way.

### Configuration

The following configuration files are used:

- tailwind.config.js
- postcss.config.js

Update the _tailwind.config.js_ file as needed for content, themes, etc.

### Setup

The following files are added:

- app/tailwind.css

The _tailwind.css_ file contains the tailwind directives. The Vite compiler
will automatically build the final _tailwind.css_ file

The following files are updated:

- app/root.tsx

```diff
+ import './tailwind.css'
- import { tailwindCss } from '~/app/tailwind.css'
- export function links() => [
-   { rel: 'stylesheet', href: tailwindCss },
- ]
```

Unlike non-Vite Remix, we are importing the _app/tailwind.css_ for module
side-effects. Vite will generate the _tailwind.css_ file and include the `<link>`
component automatically.
