# All Contributors Setup

For open source projects, it's nice to be able to publicly acknowledge contributions
from others. The All Contributors project makes it easy to add this recognition
to the README page of your project.

https://allcontributors.org/

### Packages

The following packages are added:

- `all-contributors-cli`

### Scripts

The following scripts are added to _package.json_:

- `contributors:add` - use to add a new contributor
- `contributors:generate` - use to generate a list of contributors

To add a new contributor run:

```bash
npx contributors:add GITHUB_NAME CONTRIBUTION_TYPES
```

Where CONTRIBUTION_TYPES is a comma-delimited list of items like `code`, `doc`,
etc. See https://allcontributors.org/docs/en/emoji-key for more types.

Example

```bash
npx contributors:add kiliman code,doc
```

### Configuration

The following configuration files are used:

- `.all-contributorsrc`

This file contains the list of contributors as well as the settings for the tool

### Setup

To initialize for your project, delete the existing `.all-contributorsrc` file
and run the `init` command.

```bash
npx all-contributors init
```

Then run the `contributors:add` script for each contributor. This will update the
README file.
