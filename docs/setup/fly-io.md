# Fly.io Setup

Fly.io is a hosting provider that has distributed VMs using Docker containers.

### Installation

Fly.io has documentation on running a Remix app.

https://fly.io/docs/js/frameworks/remix/#generate-the-remix-app

### Generate Remix App

```bash
brew install flyctl

# login to fly
fly auth login

# initialize fly app
fly launch --no-deploy

# manually deploy a fly app
fly deploy
```

### Configuration

The following configuration files are used:

- fly.toml

```toml
app = "your-app-name"
primary_region = "iad"

[build]

[http_service]
  internal_port = 3000
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
  min_machines_running = 0
  processes = ["app"]

[[http_service.checks]]
  grace_period = "10s"
  interval = "30s"
  method = "GET"
  timeout = "5s"
  path = "/resources/healthcheck"

[[vm]]
  cpu_kind = "shared"
  cpus = 1
  memory_mb = 1024
```

Make sure the `app` name is correct as well as the `primary_region`. You may
also want to set `auto_stop_machines = false`, or Fly will teardown your VM
when the app is idle. It can take a few seconds to start back up.

Fly also has a service check feature that will periodically hit an endpoint
to ensure your app is healthy and responsive. Specify a URL here that returns
a 200 response.

### Setup

The following files are added:

- Dockerfile
- .dockerignore

Fly will run your Dockerfile in a remote builder. It uses a build layer so the
final image is optimized and only includes code needed at runtime.

- app/routes/resources+/healthcheck.tsx

This is the service check endpoint defined in _fly.toml_. You should add things
like reading from your database, etc. to verify your app is working correctly.
