# Testing Setup

This template configures testing via [Vitest](https://vitest.dev/),
[Playwright](https://playwright.dev/) and [Testing
Library](https://testing-library.com/).

## Vitest Configuration

Vitest is used for both unit tests and testing Remix route components using
`createRemixStub`.

### Packages

The following packages are added:

- `vitest`
- `vite-tsconfig-paths`
- `@vitejs/plugin-react`
- `@testing-library/jest-dom/vitest`
- `@remix-run/testing`

### Scripts

The following scripts are added to _package.json_

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

> The _setup-test-env.ts_ script imports `@testing-library/jest-dom/vitest`
> which will automatically extent the vitest `expect` with additional matchers.

## Playwright Configuration

Playwright is used for automated end-to-end tests.

### Packages

The following packages are added:

- `@playwright/test`

### Scripts

The following scripts are added to _package.json_

- `test:e2e` - run e2e in silent mode
- `test:e2e:dev` - run e2e with Playwright UI
- `pretest:e2e:run` - builds the app
- `test:e2e:run` - run e2e with `CI=1`
- `test:e2e:install` - installs playwright browser images
- `validate` - runs e2e in run mode `CI=1`

> The `test:e2e:install` script should be run before any other script to ensure
> the browser images have been installed

### Configuration

The following configuration files are used:

- playwright.config.ts

The config file uses the environment variable `CI` to determine if it should use
mocks or not, in addition to some other parameters.

It will run all tests in the `tests/e2e` folder.
