# ESLint Setup

ESLint is a set of tools that check for coding issues and alerts you to these
problems.

### Packages

The following dev packages are added:

- `eslint`
- `eslint-config-prettier`
- `eslint-plugin-simple-import-sort`
- `@types/eslint`
- `@remix-run/eslint-config`

Adds `"eslintIgnore"` to _package.json_

```json
  "eslintIgnore": [
    "node_modules",
    "build",
    "public/build"
  ]
```

### Scripts

The following scripts are added to _package.json_:

- `lint` - runs `eslint` on all files
- `validate` - runs `eslint`, including test, typechecking, etc.

### Configuration

The following configuration files are used:

- .eslintrc.cjs

The default configuration extends `@remix-run/eslint-config`. It also includes
the `prettier` config which disables the formatting rules that we want `prettier`
to use.

In addition, I've added rules to sort imports consistently. This ensures that
code that is modified by others will not have spurious changes that will bloat
the diff.

It also includes rules for `testing-library`.

### Recommendations

I recommend that you setup VS Code to auto-fix lint issues on save.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
