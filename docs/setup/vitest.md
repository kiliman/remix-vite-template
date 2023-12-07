# Vitest Setup

Vitest is used for both unit tests and testing Remix route components using
`createRemixStub`.

https://vitest.dev

### Packages

The following packages are added:

- `vitest`
- `vite-tsconfig-paths`
- `@vitejs/plugin-react`
- `@testing-library/jest-dom/vitest`
- `@remix-run/testing`

### Scripts

The following scripts are added to _package.json_:

- `test` - run vitest in _watch_ mode
- `validate` - runs vitest in _run_ mode

### Configuration

The following configuration files are used:

- vitest.config.js

It will run all tests in the `app` folder.

### Setup

The following setup file are used:

- tests/setup/setup-test-env.ts
- tests/setup/global-setup.ts

The _setup-test-env.ts_ script imports `@testing-library/jest-dom/vitest`
which will automatically extent the vitest `expect` with additional matchers.
