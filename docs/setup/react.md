# React Setup

React is a framework for building web apps using a Component model

### Packages

The following packages are added:

- `react`
- `react-dom`

Currently due to how Remix hydrates the entire HTML document, instead of just
a `div` in the `body`, React will complain about hydration errors if the user
has any browser extensions that modifies the DOM.

We instead install the React 18.3 Canary versions which minimizes these issues.
React Canary releases are officially supported. Next.js even uses them for their
v13+ App Router feature. https://react.dev/blog/2023/05/03/react-canaries

Adds the following overrides to _package.json_ for packages expecting React
v18.2

```json
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom"
  },
```
