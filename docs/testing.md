# Testing

For how to setup testing, see [Vitest Setup](./setup/vitest.md) and [Playwright Setup](./setup/playwright.md)

This document describes how to write unit tests, Remix route component tests,
and End-to-End tests with Playwright.

## Unit Test

To write a unit test, create a file in the `app` folder with the filename
_\*.test.ts_ or create a folder named `__tests__` with a test file.

Import the `test` and `expect` functions from `vitest`. You can also import
`describe` and any other functions as needed.

### Example

```ts
// app/utils/math.test.ts
import { expect, test } from 'vitest'
import { add } from './math'

test('add should sum numbers', () => {
  const result = add(1, 2)
  expect(result).toBe(3)
})
```

## Remix Routes

Remix routes are typically comprised of `loaders` and `actions` and a UI route
component.

You can easily test `loaders` and `actions` using the same unit test methods as
above.

### Example test `loader`

```ts
// app/routes/counter.loader.test.ts
import { expect, test } from 'vitest'
import { loader } from './counter'

test('loader should return the current count', async () => {
  const request = new Request('/counter')
  const response = await loader({ request })
  const json = await response.json()
  expect(json.count).toBe(0)
})
```

### Testing Remix Route Components

Because Remix has its own internal context, you cannot test a Remix component
directly. You need to use a helper function `createRemixStub` and setup you
route configuration.

Just like with unit tests, simply create a file with the _\*.test_ suffix, or
add to `__tests__` folder.

> NOTE: The test files and folders are automatically ignored in the `routes`
> folder.

The `expect` function automatically includes the extended _matchers_ from
`@testing-library/jest-dom`, so you can use things like:
`expect(foo).toHaveTextContent('bar')`

To setup the routing configuration, call
[`createRemixStub`](https://github.com/remix-run/remix/blob/main/packages/remix-testing/create-remix-stub.tsx).
Each route needs an entry.

```ts
type StubRouteObject = {
  path: string,
  Component: React.ComponentType,
  loader?: LoaderFunction,
  action?: ActionFunction,
}
```

Use the `render` function from `@testing-library/react` to render the app, and
set `initialEntries` to the route URL you're testing.

### Example test route component

```ts
// app/routes/counter.test.tsx
import { createRemixStub } from '@remix-run/testing'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import Counter, { action, loader } from './counter'

test('counter increments when clicked', async () => {
  const App = createRemixStub([
    {
      path: '/counter',
      Component: Counter,
      loader,
      action,
    },
  ])
  await render(<App initialEntries={['/counter']} />)
  const button = await screen.findByRole('button', { name: /count:/i })
  expect(button).toHaveTextContent('Count: 0')
  await userEvent.click(button)
  expect(button).toHaveTextContent('Count: 1')
})
```

## End-to-End Testing with Playwright

Some times you need to test a workflow through a series of
routes. This is best done using end-to-end testing.

Create a test in the `tests/e2e` folder.

Import the `expect` and `test` functions from `@playwright/test`.

### Example

```ts
import { expect, test } from '@playwright/test'

test('counter test', async ({ page }) => {
  await page.goto('/counter')
  await page.getByRole('button').click()
  await expect(page).toHaveURL(`/counter`)
  const button = await page.getByRole('button', { name: /Count/i })
  expect(await button.textContent()).toBe('Count: 1')
})
```
