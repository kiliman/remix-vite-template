[![Husky](https://img.shields.io/badge/Documentation-Husky-f05535.svg?logo=husky)](https://typicode.github.io/husky/)
[![ESLint - GitHub](https://img.shields.io/badge/GitHub-Husky-f05535.svg?logo=github)](https://github.com/typicode/husky)

## Packages

To set up Husky and lint-staged for your project, The following packages are added :

```bash
npm install husky lint-staged --save-dev
```

## Setup

:small_orange_diamond: `npm install husky init`

This command will create a `husky` folder in your project. Add the following script to `package.json`:

```json
"scripts": {
    "prepare": "husky install"
},
```

## Configuration

Added following to pre-commit file in .husky

:small_orange_diamond: `.husky/pre-commit`

```sh
#!/usr/bin/sh

. "$(dirname -- "$0")/_/husky.sh"

npm run pretest
npx lint-staged
```

We will now add the following to script to package.json

```json
// package.json
{
  ...,
  {
    "husky": {
      "hooks": {
        "pre-commit": "lint-staged"
      }
    },
    "lint-staged": {
      "./app/**/*.+(ts|js)": [
        "npm run lint",
        "npm run format",
        "npm run clean && remix vite:build"
      ]
    }
  }
}
```

## Add a hook

You can customize the hook by adding more hooks, in lint staged in package.json.

## Make a commit

:small_orange_diamond: `git commit -m "Keep calm and commit"`
<br>

### Next steps

If you want to remove husky when development, or for some other reason, you can remove commands from `pre-commit` in `.husky/pre-commit`
