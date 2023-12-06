# GitHub Actions Setup

GitHub Actions allows you do do things like run tests and automate deployments
when you push code to your respository.

See the Fly.io Guide https://fly.io/docs/app-guides/continuous-deployment-with-github-actions/

### Setup

In order to deploy to Fly.io from your GitHub Action, you will need to configure a `FLY_API_TOKEN`.

```bash
fly tokens create deploy -x 999999h
```

Copy the token and add it to your repository secrets.

### Configuration

The following configuration files are used:

- .github/workflows/deploy.yml

The deploy script will run the following actions in parallel. If any action
fails, the entire worflow will fail.

- ESLint - runs lint check
- Typecheck - runs tsc typechecking
- Vitest - runs unit tests
- Playwright - runs e2e tests and uploads the report as an artifact\*

> \*NOTE: If you are running the action in local action runner
> [`act`](https://github.com/nektos/act), it will not run the artifact upload as
> it's not supported

If the actions above are successful, it will then run the `Deploy` workflow.
This checks which branch was pushed and determines which app to deploy to. The
`main` branch is the production app, whereas the `dev` branch deploys to your
staging app.
