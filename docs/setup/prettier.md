# Prettier Setup

Prettier is used to ensure consistent formatting of your source code.

### Packages

The following packages are added:

- `prettier`
- `prettier-plugin-tailwindcss`
- `eslint-config-prettier`

### Scripts

The following scripts are added to _package.json_:

- `format` - runs prettier on all files and writes any changes

If you have not setup your editor to auto-format on save, you should run this
script before committing to ensure that files are consistently formatted.

### Configuration

The following configuration files are used:

- prettier.config.js

This config file will include any plugins, like `prettier-plugin-tailwindcss`

### Recommendations

I recommend that you setup VS Code to auto-format on save.

```json
{
  "editor.formatOnSave": true
}
```
