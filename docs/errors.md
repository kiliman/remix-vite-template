# Error Handling

Remix display runtime errors using the `<ErrorBoundary>` export.

This template includes a default component that handles both `Error` and thrown `Response`.

It also includes helper functions in `utils/responses` for handling typical errors like page not found, bad request, etc.

There is a test `/error` route that shows how these helpers are used.

For example:

```ts
// renders the `<BadRequest>` component
// and displays the errors in a list
throw badRequest('Bad Request', [
  'missing param',
  'value must be number',
  'etc',
])
```
