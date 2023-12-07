## Playwright Setup

Playwright is used for automated end-to-end tests.

https://playwright.dev

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

The `test:e2e:install` script should be run before any other script to ensure
the browser images have been installed

### Configuration

The following configuration files are used:

- playwright.config.ts

The config file uses the environment variable `CI` to determine if it should use
mocks or not, in addition to some other parameters.

It will run all tests in the `tests/e2e` folder.
